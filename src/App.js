import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Workspace from "./components/Workspace.js";
import Nav from "./components/Nav.js";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<Workspace />
			</div>
		);
	}
}

export default App;
