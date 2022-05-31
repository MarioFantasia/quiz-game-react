import React from "react";
import Input from "../../atoms/input/input";
import "./option.scss";

import { useSelector, useDispatch } from "react-redux";
import {
	setType,
	setTime,
	setDifficult,
} from "../../../../redux/slices/optionsSlice";
import {
	categoriesSelector,
	selectCategory,
} from "../../../../redux/slices/categoriesSlice";

const Option = ({ optionName, optionselect }) => {
	const { categories } = useSelector(categoriesSelector);
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
								dispatch(setTime(parseInt(e.target.value)));
							}}
						/>
						<Input
							label="12s"
							type="radio"
							value="12"
							name="time"
							onChange={(e) => {
								dispatch(setTime(parseInt(e.target.value)));
							}}
						/>

						<Input
							label="10s"
							type="radio"
							value="10"
							name="time"
							onChange={(e) => {
								dispatch(setTime(parseInt(e.target.value)));
							}}
						/>
					</>
				) : optionselect === "difficult" ? (
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
				) : optionselect === "categories" ? (
					<div className="categories">
						{categories.categories[0] ? (
							categories.categories.map((category) => (
								<div key={category.id}>
									<Input
										type="radio"
										name="category"
										label={category.name}
										value={category.id}
										onChange={(e) => {
											dispatch(selectCategory(e.target.value));
										}}
									/>
								</div>
							))
						) : (
							<div>Loading...</div>
						)}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Option;
