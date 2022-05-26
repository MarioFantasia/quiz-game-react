import React from "react";
import Option from "../../molecules/option/option";
import Question from "../../molecules/question/question";

import "./box.scss";

const Box = ({ box, questionesList, correctAnswer, possibleAnswers }) => {
	return (
		<>
			{box === "options" ? (
				<div box={box} className="box">
					<h5>Options</h5>
					<div className="options">
						<Option optionName="Type of Questiones" optionselect="questiones" />
						<Option optionName="Time" optionselect="timer" />
						<Option optionName="Difficult" optionselect="difficult" />
					</div>
				</div>
			) : box === "categories" ? (
				<div box={box} className="box">
					<h5>Category</h5>
					<Option optionselect="categories" />
				</div>
			) : (
				<div box={box} className="questionBox">
					<Question
						questionesList={questionesList}
						correctAnswer={correctAnswer}
						possibleAnswers={possibleAnswers}
					/>
				</div>
			)}
		</>
	);
};

export default Box;
