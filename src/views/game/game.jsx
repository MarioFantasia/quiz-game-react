import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { questionesSelector } from "../../redux/slices/questionesSlice";
import { optionsSelector } from "../../redux/slices/optionsSlice";
import Container from "../../components/templates/container";
import "./game.scss";

const Game = () => {
	const { questiones } = useSelector(questionesSelector);
	const [questionesList, setQuestionesList] = useState(null);
	const [correctAnswer, setCorrectAnswer] = useState([]);
	const [possibleAnswers, setPossibleAnswers] = useState([]);
	const { options } = useSelector(optionsSelector);
	useEffect(() => {
		setQuestionesList(questiones.questiones);

		if (questionesList && questionesList.length > 0) {
			setCorrectAnswer(
				questionesList.map((answer) => {
					return answer.correct_answer;
				})
			);

			if (options.type !== "boolean") {
				setPossibleAnswers(
					questionesList.map((answer) => {
						return answer.incorrect_answers.concat(answer.correct_answer);
					})
				);
			} else {
				setPossibleAnswers(
					questionesList.map((answer) => {
						return ["True", "False"];
					})
				);
			}
		}
	}, [questiones, questionesList, options.type]);

	return (
		<div>
			<Container
				container="game"
				questionesList={questionesList}
				correctAnswer={correctAnswer}
				possibleAnswers={possibleAnswers}
			/>
		</div>
	);
};

export default Game;
