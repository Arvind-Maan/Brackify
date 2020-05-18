import React from "react";

const Counter = (props) => {
	return (
		<div className="add-rem-container">
			<button className="icon-btn add-btn">
				<div className="btn-txt" onClick={(e) => props.onSubtract(e)}>
					Remove
				</div>
			</button>
			<button className="icon-btn add-btn">
				<div className="add-icon"></div>
				<div className="btn-txt" onClick={(e) => props.onAdd(e)}>
					Add
				</div>
			</button>
		</div>
	);
};

export default Counter;
