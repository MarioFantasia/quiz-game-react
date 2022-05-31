import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { optionsSelector } from "../../../../redux/slices/optionsSlice";
import {
	questionesSelector,
	numberQuestion,
} from "../../../../redux/slices/questionesSlice";
import "./timer.scss";
const Timer = () => {
	const { options } = useSelector(optionsSelector);
	const { questiones } = useSelector(questionesSelector);

	const [time, setTime] = useState(options.time);
	const [seconds, setSeconds] = useState(0);
	let activeTime = useRef(0);

	const timeScore = time - seconds;

	const dispatch = useDispatch();

	useEffect(() => {
		activeTime.current = setInterval(() => {
			setSeconds(seconds + 1);
		}, 1000);

		return () => clearInterval(activeTime.current);
	});

	useEffect(() => {
		if (seconds && seconds !== options.seconds) {
			setSeconds(0);
		}
	}, [questiones.question]);

	useEffect(() => {
		if (time !== 0 && time !== "" && timeScore < 0) {
			setSeconds(0);
			alert("tempo scanduto");
			dispatch(numberQuestion(questiones.question + 1));
		} else if (time === "" && timeScore < 1) {
			setTime(options.time);
			setSeconds(0);
			activeTime.current = 0;
		}
	}, [timeScore]);

	return <div className="timer">{timeScore}</div>;
};

export default Timer;
