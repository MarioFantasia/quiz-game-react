import React from "react";

import "./button.scss";

const Button = ({ onClick }) => {
	return (
		<div className="button">
			<button onClick={onClick}>Button</button>
		</div>
	);
};

export default Button;
