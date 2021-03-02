import React from 'react';
import './AgeInput.css';

const ageInput = props => {
	return (
		<div className="AgeInput">
			<label name="age">Age: </label>
			<input
				type="text"
				htmlFor="age"
				onChange={props.changed}
				value={props.age}
			/>
		</div>
	);
};

export default ageInput;
