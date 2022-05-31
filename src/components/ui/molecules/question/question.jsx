import React, { useState, useEffect } from "react";
import Button from "../../atoms/button/button";
import { useSelector, useDispatch } from "react-redux";
import { optionsSelector } from "../../../../redux/slices/optionsSlice";
import {
	questionesSelector,
	numberQuestion,
} from "../../../../redux/slices/questionesSlice";
import "./question.scss";

const Question = ({ questionesList, correctAnswer, possibleAnswers }) => {
	const [number, setNumber] = useState(0);
	const [positions, setPositions] = useState([]);
	const [numberPositions, setNumberPositions] = useState(null);
	const { options } = useSelector(optionsSelector);
	const { questiones } = useSelector(questionesSelector);

	const dispatch = useDispatch();

	const randomPosition = (min, max, numPos) => {
		let setRandomPositions = [];
		let randomPos;
		for (let i = 0; i < numPos; i++) {
			randomPos = Math.round(Math.random() * (max - min));
			if (!setRandomPositions.includes(randomPos)) {
				setRandomPositions.push(randomPos);
			} else {
				i--;
			}
		}
		return setRandomPositions;
	};

	useEffect(() => {
		if (possibleAnswers && possibleAnswers.length > 0) {
			setNumberPositions(possibleAnswers[0].length);
			if (options.type !== "boolean") {
				setPositions(randomPosition(0, numberPositions - 1, numberPositions));
			} else {
				setPositions([0, 1]);
			}
		}
	}, [possibleAnswers, numberPositions, options.type]);

	return (
		<>
			{!questionesList ? (
				<div>Domande non disponibili</div>
			) : (
				<>
					{questionesList.map((q, index) => {
						if (index === number) {
							return (
								<div className="question-container" key={index}>
									<div className="question">{q.question}</div>
									<div className="answers">
										{positions.map((pos, i) => {
											return (
												<div key={i} className="answer">
													<Button
														text={possibleAnswers[index][pos]}
														onClick={() => {
															setNumber(index + 1);
															dispatch(numberQuestion(questiones.question + 1));
															if (
																possibleAnswers[index][pos] ===
																correctAnswer[index]
															) {
																alert("corretto");
															} else {
																alert("errata");
															}
															if (questionesList[index].type !== "boolean") {
																setPositions(
																	randomPosition(
																		0,
																		numberPositions - 1,
																		numberPositions
																	)
																);
															}
														}}
													/>
												</div>
											);
										})}
									</div>
								</div>
							);
						}
					})}
				</>
			)}
		</>
	);
};

export default Question;
