import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { questionesSelector } from "../../redux/slices/questionesSlice";

import Container from "../../components/templates/container";
import "./game.scss";
const Game = () => {
	const { questiones } = useSelector(questionesSelector);
	const [questionesList, setQuestionesList] = useState(null);

	useEffect(() => {
		setQuestionesList(questiones.questiones);
	}, [questiones]);

	const setQuestiones = () => {
		return questionesList.map((r, i) => {
			if (r.question.includes("&#039;")) {
				return r.question.replace("&#039;", `'`);
			}

			if (r.question.includes("&quot;")) {
				return r.question.replace("&quot;", `"`).replace("&quot;", `"`);
			}

			return <div key={i}>{r.question.normalize("NFC")}</div>;
		});
	};

	return (
		<div>
			<Container container="game" />
		</div>
	);
};

export default Game;
