import React, { useState, useEffect } from "react";

import "./question.scss";
import { useSelector } from "react-redux";
import { questionesSelector } from "../../../../redux/slices/questionesSlice";

const Question = () => {
	const { questiones } = useSelector(questionesSelector);

	let [numberQuestion, setNumberQuestion] = useState(0);
	const [questionesList, setQuestionesList] = useState(null);
	const [possibleAnswer, setPossibleAnswer] = useState([]);

	useEffect(() => {
		setQuestionesList(questiones.questiones);
	}, [questiones]);

	return (
		<>
			{!questionesList ? (
				<div>Domande non disponibili</div>
			) : (
				<>
					{questionesList.map((q, i) => {
						if (i === numberQuestion) {
							return (
								<div className="question-container" key={i}>
									<div className="question">{q.question}</div>
									<div className="answers">
										<div className="answer">
											<button onClick={() => setNumberQuestion(i + 1)}>
												Click
											</button>
											{q.incorrect_answers[0]}
										</div>
										<div className="answer">
											<button onClick={() => setNumberQuestion(i + 1)}>
												Click
											</button>
											{q.incorrect_answers[1]}
										</div>
										<div className="answer">
											<button onClick={() => setNumberQuestion(i + 1)}>
												Click
											</button>
											{q.incorrect_answers[2]}
										</div>
										<div className="answer">
											<button onClick={() => setNumberQuestion(i + 1)}>
												Click
											</button>
											{q.correct_answer}
										</div>
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
