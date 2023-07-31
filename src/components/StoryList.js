import React from 'react';
import "./StoryList.scss"
import {Card} from "antd";

const StoryList = ({style}) => {
	return (
		<div style={style}>
			<Card title="Stories" size="small">
				Stories from people
			</Card>
		</div>
	);
};

export default StoryList;