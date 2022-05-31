import React from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/atoms/button/button";
import Timer from "../../ui/molecules/timer/timer";
import "./bottom.scss";

const Bottom = ({ onClickButton, sendRequestQuestiones }) => {
	return (
		<div className="bottom">
			{!window.location.href.includes("game") ? (
				<Link to={sendRequestQuestiones ? "/game" : ""}>
					<Button onClick={onClickButton} text="GIOCA" />
				</Link>
			) : (
				<>
					<Timer />
				</>
			)}
		</div>
	);
};

export default Bottom;
