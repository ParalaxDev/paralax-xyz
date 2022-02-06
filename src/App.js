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
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Kew from "./pages/Kew";
import Typography from "./pages/Typography";
import TateModern from "./pages/TateModern";
import DrBarkers from "./pages/DrBarkers";
import Navbar from "./components/Navbar";
import Error404 from "./pages/Error404";
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
			{/* {window.location.href.split('/')[3] === 'projects' ? <Navbar /> : null} */}
			<Navbar />
			<Switch>
				<Route path="/project-editor" component={ProjectEditor} />
				{/* <Route exact path="/projects/:name" component={Project} /> */}
				{/* <Route path="/projects/:name/:subpage" component={SubProject} /> */}
				<Route path="/projects/kew" component={Kew} />
				<Route path="/projects/typography" component={Typography} />
				<Route path="/projects/drbarkers" component={DrBarkers} />
				<Route path="/projects/tatemodern" component={TateModern} />
				<Route path="/projects" component={Projects} exact />
				<Route exact path="/" component={Homepage} />
				<Route path="/" component={Error404} />
			</Switch>
		</Router >
	)
}

export default App;
