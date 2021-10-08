import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import { initializeApp } from "firebase/app"
import smoothscroll from 'smoothscroll-polyfill';

import ProjectEditor from "./components/ProjectEditor"
import ProjectViewer from "./components/ProjectViewer";
import Project from "./components/Project";
import SubProject from "./components/SubProject";
// import Homepage from "./components/HomePage";
// import NewHomepage from "./components/NewHomepage";
import MainPage from "./components/MainPage";
import ProjectsPage from "./components/ProjectsPage";
import Kew from "./projects/Kew";
import Typography from "./projects/Typography";
// import NewHomepage from "./components/NewHomepage";

const firebaseConfig = {
	apiKey: "AIzaSyBAhfk_WkXdvdci2kXZLpj7ZCziXCZ_wBg",

	authDomain: "paralax-interactive-portfolio.firebaseapp.com",

	projectId: "paralax-interactive-portfolio",

	storageBucket: "paralax-interactive-portfolio.appspot.com",

	messagingSenderId: "915228355972",

	appId: "1:915228355972:web:a6349365168a5f174401d1",

	measurementId: "G-QLPEGNTJH3"
}

const App = () => {

	const firebaseApp = initializeApp(firebaseConfig)
	// const db = getFirestore();




	return (
		<Router>
			<Switch>
				<Route path="/project-editor" component={ProjectEditor} />
				{/* <Route exact path="/projects/:name" component={Project} /> */}
				{/* <Route path="/projects/:name/:subpage" component={SubProject} /> */}
				<Route path="/projects/kew" component={Kew} />
				<Route path="/projects/typography" component={Typography} />
				<Route path="/projects" component={ProjectsPage} />
				<Route exact path="/" component={MainPage} />
				<Route path="/">
					<h1>Error 404</h1>
					<h4>This is not the page your looking for</h4>
				</Route>
			</Switch>
		</Router >
	)
}

export default App;
