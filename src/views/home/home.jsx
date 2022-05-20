import React, { useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { optionsSelector } from "../../redux/slices/optionsSlice";
import {
	getCategories,
	categoriesSelector,
} from "../../redux/slices/categoriesSlice";

import { generateQuestiones } from "../../redux/slices/questionesSlice";
import Container from "../../components/templates/container";

const Home = () => {
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
				console.log(response.data.results);
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
					getQuestiones();
				}}
			/>
		</div>
	);
};

export default Home;
