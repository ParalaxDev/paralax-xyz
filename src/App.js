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
				<Route path="/project-editor">
					<ProjectEditor />
				</Route>
				<Route path="/">
					<h1>Main page bby</h1>
					<ProjectViewer />
				</Route>
			</Switch>
		</Router>
	)
}

export default App;
