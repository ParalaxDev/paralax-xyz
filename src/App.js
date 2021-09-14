import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import ProjectEditor from "./components/ProjectEditor"
import ProjectViewer from "./components/ProjectViewer";

const App = () => {



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
