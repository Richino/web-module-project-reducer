import React from "react";

const CalcButton = ({ value, buttonClick = () => {}, size = 4 }) => {
	return (
		<div className={`col-xs-${size}`}>
			<button type="button" onClick={buttonClick(value)} className="btn">
				{value}
			</button>
		</div>
	);
};

export default CalcButton;
