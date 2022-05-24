import React from "react";
import { Link } from "react-router-dom";

import Button from "../../ui/atoms/button/button";
import "./bottom.scss";

const Bottom = ({ onClickButton, sendRequestQuestiones }) => {
	return (
		<div className="bottom">
			<Link to={sendRequestQuestiones ? "/game" : ""}>
				{!window.location.href.includes("game") ? (
					<Button onClick={onClickButton} text="GIOCA" />
				) : null}
			</Link>
		</div>
	);
};

export default Bottom;
