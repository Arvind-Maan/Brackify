import React from "react";
import Bracket from "./Bracket.js";

function divide_by_2(n) {
	let result = 0;
	while (n % 2 == 0) {
		result++;
		n /= 2;
	}
	return result;
}

const TournamentLayout = (props) => {
	let bracketsArr = [];
	for (let x = 0; x < divide_by_2(props.numOfBrackets); x++) {
		let newArr = [];
		let newArr2 = [];
		for (let i = 0; i < props.numOfBrackets / 2 ** (x + 1); i++) {
			newArr.push(
				<li>&nbsp;</li>,

				<li className="game game-top winner">
					<Bracket />
				</li>,
				<li>&nbsp;</li>,

				<li className="game game-bottom">
					<Bracket />
				</li>,
				<li>&nbsp;</li>,
			);
		}

		bracketsArr.push(<ul>{newArr}</ul>);
	}

	return <main>{bracketsArr}</main>;
};

export default TournamentLayout;
