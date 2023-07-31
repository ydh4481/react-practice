import React, {useEffect, useState} from 'react';
import Axios from "axios";
import {Alert, Button, Checkbox, Form, Input, notification} from "antd";
import {useHistory} from "react-router-dom";
import {FrownOutlined, SmileOutlined} from "@ant-design/icons";

const Signup = () => {
	const history = useHistory();
	const [fieldErrors, setFieldErrors] = useState({});

	const onFinish = (values) => {
		async function fn() {
			const {username, password} = values;
			setFieldErrors({});
			const data = {username, password};
			try {
				const response = await Axios.post(
					"http://localhost:8000/accounts/signup/",
					data
				);

				notification.open({
					message: "회원가입 성공",
					description: "로그인 페이지로 이동합니다.",
					icon: <SmileOutlined style={{color: "#108ee9"}}/>
				});

				history.push("/accounts/login/")
			} catch (error) {
				if (error.response) {
					notification.open({
						message: "회원가입 실패",
						description: "아이디/암호를 확인해주세요.",
						icon: <FrownOutlined style={{color: "#ff3333"}}/>
					});

					const {data: fieldsErrorMessages} = error.response;
					setFieldErrors(
						Object.entries(fieldsErrorMessages).reduce(
							(acc, [fieldName, errors]) => {
								console.log(typeof errors)
								acc[fieldName] = {
									validateStatus: "error",
									help: errors.join(" "),
								}
								return acc;
							}, {}
						)
					);
				}
			}
		}

		fn();
	}
	return (
		<Form
			{...layout}
			onFinish={onFinish}
			// onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Username"
				name="username"
				rules={[{required: true, message: 'Please input your username!'}]}
				hasFeedback
				{...fieldErrors.username}
			>
				<Input/>
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[{required: true, message: 'Please input your password!'}]}
				{...fieldErrors.password}
			>
				<Input.Password/>
			</Form.Item>

			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

const layout = {
	labelCol: {span: 8},
	wrapperCol: {span: 16}
}

const tailLayout = {
	wrapperCol: {offset: 8, span: 16}
}

export default Signup;