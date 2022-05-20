import React from "react";
import { Link } from "react-router-dom";
import Top from "./top/top";
import Bottom from "./bottom/bottom";

import "./container.scss";

const Container = ({ container, onClickButton }) => {
	return (
		<div className="container">
			<Link to="/">
				<h1>Quiz Game</h1>
			</Link>
			<Top container={container} />
			<Bottom onClickButton={onClickButton} />
		</div>
	);
};

export default Container;
