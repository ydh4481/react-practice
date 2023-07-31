import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "pages";
import {BrowserRouter} from "react-router-dom";
import "antd/dist/antd.css"
import {AppProvider} from "store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<AppProvider>
			<Root/>
		</AppProvider>
	</BrowserRouter>
);