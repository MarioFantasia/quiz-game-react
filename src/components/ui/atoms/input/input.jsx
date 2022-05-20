import React from "react";

import "./input.scss";

const Input = ({ label, type, value, onChange, name, classInputName }) => {
	return (
		<div className="input">
			<div className="label">{label}</div>
			<div className="inputContainer">
				<input
					type={type}
					value={value}
					onChange={onChange}
					name={name}
					className="inputType"
				/>
			</div>
		</div>
	);
};

export default Input;
