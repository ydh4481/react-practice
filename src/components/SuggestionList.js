import React, { useEffect, useMemo, useState } from 'react';
import { Alert, Button, Card } from "antd";
import Suggestion from "./Suggestion";
import { useAppContext } from "../store";

import useAxios from "axios-hooks";
import Axios from "axios";

const SuggestionList = ({ style }) => {
	const { store: { jwtToken } } = useAppContext();

	const [userList, setUserList] = useState([]);

	const headers = { Authorization: `Bearer ${jwtToken}` };

	// 조회에 유용함
	// 그 외에는 그냥 Axios 사용하는게 더 나을 수 있음
	const [{ data: origUserList, loading, error }, refetch] = useAxios({
		url: "http://localhost:8000/accounts/suggestions/",
		headers
	});

	useEffect(() => {
		if (!origUserList) setUserList([]);
		else setUserList(origUserList.map(user => ({ ...user, is_follow: false })));
	}, [origUserList]);

	const onFollowUser = (username) => {
		const data = { username };
		const config = { headers };
		Axios.post("http://localhost:8000/accounts/follow/", data, config)
			.then(response => {
				setUserList(prevUserList =>
					prevUserList.map(user =>
						(user.username !== username) ? user : { ...user, is_follow: true }
					)
				);
			}).catch(error => {
			console.log(error);
		})

	};

	return (
		<div style={style}>
			{loading && <Alert type="warning" message="로딩 중"/>}
			{error && <Alert type="warning" message="로딩 중 에러가 발생했습니다."/>}

			<Button onClick={() => refetch()}>Reload</Button>
			<Card title="Suggestions for you" size="small">
				{userList.map(suggestionUser =>
					<Suggestion
						key={suggestionUser.username}
						suggestionUser={suggestionUser}
						onFollowUser={onFollowUser}
					/>
				)}
			</Card>
		</div>
	);
};

export default SuggestionList;