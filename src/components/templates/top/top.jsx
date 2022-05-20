import React from "react";

import Box from "../../ui/organism/box/box";

import "./top.scss";

const Top = ({ container }) => {
	return (
		<div className="top">
			{container === "home" ? (
				<>
					<Box box="options" />
					<Box box="categories" />
				</>
			) : container === "game" ? (
				<Box box="questionBox" />
			) : null}
		</div>
	);
};

export default Top;
