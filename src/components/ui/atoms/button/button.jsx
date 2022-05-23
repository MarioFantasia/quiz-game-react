import React from "react";

import "./button.scss";

const Button = ({ text, onClick, active }) => {
	return (
		<div className="button">
			<button onClick={onClick} active={active}>
				{text}
			</button>
		</div>
	);
};

export default Button;
