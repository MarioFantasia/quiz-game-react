import React from "react";

import Box from "../../ui/organism/box/box";

import "./top.scss";

const Top = ({ container, questionesList, correctAnswer, possibleAnswers }) => {
	return (
		<div className="top">
			{container === "home" ? (
				<>
					<Box box="options" />
					<Box box="categories" />
				</>
			) : container === "game" ? (
				<Box
					box="questionBox"
					questionesList={questionesList}
					correctAnswer={correctAnswer}
					possibleAnswers={possibleAnswers}
				/>
			) : null}
		</div>
	);
};

export default Top;
