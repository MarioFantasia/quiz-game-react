import React from "react";
import Input from "../../atoms/input/input";
import Option from "../../molecules/option/option";
import Question from "../../molecules/question/question";

import { useSelector, useDispatch } from "react-redux";
import {
	categoriesSelector,
	selectCategory,
} from "../../../../redux/slices/categoriesSlice";

import "./box.scss";

const Box = ({ box }) => {
	const { categories } = useSelector(categoriesSelector);
	const dispatch = useDispatch();
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
					<div className="box-categories">
						{categories.categories[0] ? (
							categories.categories.map((category, index) => (
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
				</div>
			) : (
				<div box={box} className="questionBox">
					<Question />
				</div>
			)}
		</>
	);
};

export default Box;
