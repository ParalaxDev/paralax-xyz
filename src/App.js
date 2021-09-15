import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import { initializeApp } from "firebase/app"

import ProjectEditor from "./components/ProjectEditor"
import ProjectViewer from "./components/ProjectViewer";
import Project from "./components/Project";

const firebaseConfig = {
	apiKey: process.env.APIKEY,
	authDomain: process.env.AUTHDOMAIN,
	projectId: process.env.PROJECTID,
	storageBucket: 'paralax-interactive-portfolio.appspot.com',
	messagingSenderId: process.env.MESSAGINGSENDERID,
	appId: process.env.APPID
}

const App = () => {

	const firebaseApp = initializeApp(firebaseConfig)


	return (
		<Router>
			<Switch>
				<Route path="/project-editor" component={ProjectEditor} />
				<Route path="/projects/:name" component={Project} />
				<Route exact path="/" component={ProjectViewer} />
				<Route path="/">
					<h1>Error 404</h1>
					<h4>This is not the page your looking for</h4>
				</Route>
			</Switch>
		</Router >
	)
}

export default App;
