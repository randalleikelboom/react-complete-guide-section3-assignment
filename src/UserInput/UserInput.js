import React from 'react';
import './UserInput.css';

const userInput = props => {
	return (
		<div className="UserInput">
			<label name="name">Name: </label>
			<input
				type="text"
				htmlFor="name"
				onChange={props.changed}
				value={props.username}
			/>
		</div>
	);
};

export default userInput;
