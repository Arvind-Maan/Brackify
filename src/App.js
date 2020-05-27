import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import Counter from "./components/Counter.js";
import Bracket from "./components/Bracket";

class App extends React.Component {
	constructor() {
		super();
		this.bracketSizeMax = 64;
		this.bracketSizeMin = 2;
		this.state = {
			bracketSize: 2,
			apiResponse: "",
		};
	}

	callAPI() {
		fetch("http://localhost:9000/testAPI")
			.then((res) => res.text())
			.then((res) => this.setState({ apiResponse: res }));
	}

	componentWillMount() {
		this.callAPI();
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
				<p> {this.state.apiResponse}</p>
				<Bracket />
			</div>
		);
	}
}

export default App;
