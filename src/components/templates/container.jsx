import React from "react";
import { Link } from "react-router-dom";
import Top from "./top/top";
import Bottom from "./bottom/bottom";

import "./container.scss";

const Container = ({
	container,
	onClickButton,
	sendRequestQuestiones,
	questionesList,
	correctAnswer,
	possibleAnswers,
}) => {
	return (
		<div className="container">
			<div className="title">
				<Link to="/">
					<h1>Quiz Game</h1>
				</Link>
			</div>
			<Top
				container={container}
				questionesList={questionesList}
				correctAnswer={correctAnswer}
				possibleAnswers={possibleAnswers}
			/>
			<Bottom
				onClickButton={onClickButton}
				sendRequestQuestiones={sendRequestQuestiones}
			/>
		</div>
	);
};

export default Container;
