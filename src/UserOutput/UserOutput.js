import React from 'react';
import './UserOuput.css';

const userOutput = props => {
	return (
		<div className="userOutput">
			<p>{props.username} is learning React to improve my skills!</p>
			<p>
				I'm taking on this challenge at {props.age} years old. You're never to
				old to learn!
			</p>
		</div>
	);
};

export default userOutput;
