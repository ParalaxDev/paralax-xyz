import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Kew from "./pages/Kew";
import Typography from "./pages/Typography";
import DrBarkers from "./pages/DrBarkers";
import Navbar from "./components/Navbar";
import Error404 from "./pages/Error404";


const App = () => {


	return (
		<Router>
			{/* {window.location.href.split('/')[3] === 'projects' ? <Navbar /> : null} */}
			<Navbar />
			<Switch>
				{/* <Route exact path="/projects/:name" component={Project} /> */}
				{/* <Route path="/projects/:name/:subpage" component={SubProject} /> */}
				<Route path="/projects/kew" component={Kew} />
				<Route path="/projects/typography" component={Typography} />
				<Route path="/projects/drbarkers" component={DrBarkers} />
				<Route path="/projects" component={Projects} exact />
				<Route exact path="/" component={Homepage} />
				<Route path="/" component={Error404} />
			</Switch>
		</Router >
	)
}

export default App;
