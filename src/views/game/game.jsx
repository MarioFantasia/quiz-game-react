import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { questionesSelector } from "../../redux/slices/questionesSlice";

import Container from "../../components/templates/container";
import "./game.scss";
const Game = () => {
	const { questiones } = useSelector(questionesSelector);
	const [questionesList, setQuestionesList] = useState(null);

	return (
		<div>
			<Container container="game" />
		</div>
	);
};

export default Game;
