import React, { useEffect } from "react";
import Input from "../../atoms/input/input";
import "./option.scss";

import { useSelector, useDispatch } from "react-redux";
import {
	setType,
	setTime,
	setDifficult,
	optionsSelector,
} from "../../../../redux/slices/optionsSlice";

const Option = ({ optionName, optionselect }) => {
	const { options } = useSelector(optionsSelector);
	const dispatch = useDispatch();

	return (
		<div className="option-box">
			<div className="option-type">
				<h3>{optionName}</h3>
			</div>
			<div className="option" optionselect={optionselect}>
				{optionselect === "questiones" ? (
					<>
						<Input
							label="Multiple choose"
							type="radio"
							value="multiple"
							name="typeQuestion"
							onChange={(e) => {
								dispatch(setType(e.target.value));
							}}
						/>
						<Input
							label="True/False"
							type="radio"
							value="boolean"
							name="typeQuestion"
							onChange={(e) => {
								dispatch(setType(e.target.value));
							}}
						/>
					</>
				) : optionselect === "timer" ? (
					<>
						<Input
							label="15s"
							type="radio"
							value="15"
							name="time"
							onChange={(e) => {
								dispatch(setTime(e.target.value));
							}}
						/>
						<Input
							label="12s"
							type="radio"
							value="12"
							name="time"
							onChange={(e) => {
								dispatch(setTime(e.target.value));
							}}
						/>

						<Input
							label="10s"
							type="radio"
							value="10"
							name="time"
							onChange={(e) => {
								dispatch(setTime(e.target.value));
							}}
						/>
					</>
				) : (
					<>
						<Input
							label="Easy"
							type="radio"
							value="easy"
							name="difficulty"
							onChange={(e) => {
								dispatch(setDifficult(e.target.value));
							}}
						/>
						<Input
							label="Medium"
							type="radio"
							value="medium"
							name="difficulty"
							onChange={(e) => {
								dispatch(setDifficult(e.target.value));
							}}
						/>

						<Input
							label="Hard"
							type="radio"
							value="hard"
							name="difficulty"
							onChange={(e) => {
								dispatch(setDifficult(e.target.value));
							}}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default Option;
