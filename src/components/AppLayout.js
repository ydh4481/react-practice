import React from 'react';
import "./AppLayout.scss"
import { Input, Menu } from "antd";
import StoryList from "./StoryList";
import SuggestionList from "./SuggestionList";
import LogoImage from "assets/logo.png"

function AppLayout({ children, sidebar }) {
	return (
		<div className="app">
			<div className="header">
				<img src={LogoImage} alt="" width={"130px;"}/>
				<div className="search">
					<Input.Search/>
				</div>
				<div className="topnav">
					<Menu mode="horizontal">
						<Menu.Item>메뉴1</Menu.Item>
						<Menu.Item>메뉴2</Menu.Item>
						<Menu.Item>메뉴3</Menu.Item>
					</Menu>
				</div>
			</div>
			<div className="sidebar">
				{sidebar  }
				<StoryList style={{ marginBottom: "1rem" }}/>
				<SuggestionList/>
			</div>
			<div className="contents">{children}</div>
			<div className="footer">
				&copy; 2023. Yang.
			</div>
		</div>
	);
}

export default AppLayout;