import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Workspace from "./components/Workspace.js";
import Nav from "./components/Nav.js";
import Counter from "./components/Counter.js";

class App extends React.Component {
	constructor() {
		super();
		this.bracketSizeMax = 64;
		this.bracketSizeMin = 2;
		this.state = {
			bracketSize: 2,
		};
	}

	handleAdd = (e) => {
		e.preventDefault();
		const nextSize =
			this.state.bracketSize * 2 >= this.bracketSizeMax
				? this.bracketSizeMax
				: this.state.bracketSize * 2;
		this.setState({ bracketSize: nextSize });
		console.log(this.state.bracketSize);
	};

	handleSubtract = (e) => {
		e.preventDefault();
		const nextSize =
			this.state.bracketSize / 2 <= this.bracketSizeMin
				? this.bracketSizeMin
				: this.state.bracketSize / 2;
		this.setState({ bracketSize: nextSize });
		console.log(this.state.bracketSize);
	};

	render() {
		return (
			<div className="App">
				<Nav />
				<Counter onAdd={this.handleAdd} onSubtract={this.handleSubtract} />
				<Workspace />
			</div>
		);
	}
}

export default App;
