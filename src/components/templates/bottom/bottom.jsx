import React from "react";
import { Link } from "react-router-dom";

import Button from "../../ui/atoms/button/button";
import "./bottom.scss";

const Bottom = ({ onClickButton }) => {
	return (
		<div className="bottom">
			<Link to="/game">
				<Button onClick={onClickButton} />
			</Link>
		</div>
	);
};

export default Bottom;
