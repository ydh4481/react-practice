import React from "react";
import AppLayout from "../components/AppLayout";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import AccountsRoutes from "./accounts";
import LoginRequiredRoute from "utils/LoginRequiredRoute";

function Root() {
	return (
		<>
			<LoginRequiredRoute exact path="/" component={Home}/>
			<Route exact path="/about" component={About}/>
			<Route path="/accounts" component={AccountsRoutes}/>
		</>
	)
}

export default Root;

