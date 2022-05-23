import React, { useState, useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { resetOptions, optionsSelector } from "../../redux/slices/optionsSlice";
import {
	getCategories,
	resetSelectCategory,
	categoriesSelector,
} from "../../redux/slices/categoriesSlice";

import { generateQuestiones } from "../../redux/slices/questionesSlice";
import Container from "../../components/templates/container";

const Home = () => {
	const [sendRequestQuestiones, setSendRequestQuestiones] = useState(false);
	const dispatch = useDispatch();
	const { options } = useSelector(optionsSelector);
	const { categories } = useSelector(categoriesSelector);

	useEffect(() => {
		axios({
			method: "get",
			url: "https://opentdb.com/api_category.php",
			timeout: 3000,
		})
			.then((response) => {
				dispatch(getCategories(response.data.trivia_categories));
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		if (options && categories) {
			Object.keys(options).forEach((option) => {
				if (option !== "" && categories.selectedCategory !== null) {
					setSendRequestQuestiones(true);
				}
			});
		}
	}, [options, categories]);

	const getQuestiones = () => {
		axios({
			method: "get",
			url: `https://opentdb.com/api.php?amount=12&category=${categories.selectedCategory}&difficulty=${options.difficult}&type=${options.type}`,
			timeout: 6000,
		})
			.then((response) => {
				if (response.data.results.length !== 0) {
					dispatch(generateQuestiones(response.data.results));
				} else {
					alert("Domande non disponibili");
				}
			})
			.finally(() => {
				dispatch(resetSelectCategory());
				dispatch(resetOptions());
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<Container
				container="home"
				onClickButton={() => {
					if (sendRequestQuestiones) {
						getQuestiones();
					} else {
						alert("compila i campi");
					}
				}}
				sendRequestQuestiones={sendRequestQuestiones}
			/>
		</div>
	);
};

export default Home;
