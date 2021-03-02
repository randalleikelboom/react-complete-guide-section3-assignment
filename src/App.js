import React, { Component } from 'react';
import './App.css';
import NameInput from './UserInput/UserInput';
import AgeInput from './AgeInput/AgeInput.js';
import Output from './UserOutput/UserOutput';

class App extends Component {
	state = {
		users: [{ username: 'Randall', age: 50 }],
	};

	userProfileHandler = event => {
		this.setState({
			users: [{ username: event.target.value, age: this.state.users[0].age }],
		});
	};

	ageProfileHandler = event => {
		this.setState({
			users: [
				{ username: this.state.users[0].username, age: event.target.value },
			],
		});
	};

	render() {
		const style = {
			color: 'red',
			font: 'inherit',
			padding: '5px',
			textDecoration: 'underline',
		};

		return (
			<div className="App">
				<h4 style={style}>ASSIGNMENT ANSWER</h4>
				<NameInput
					username={this.state.users[0].username}
					changed={this.userProfileHandler}
				/>
				<AgeInput
					age={this.state.users[0].age}
					changed={this.ageProfileHandler}
				/>
				<h4 style={style}>Output</h4>
				<Output
					username={this.state.users[0].username}
					age={this.state.users[0].age}
				/>
				<h4 style={style}>REACT ASSIGNMENT</h4>
				<ol>
					<li>Create TWO new components: UserInput and UserOutput</li>
					<li>
						UserInput should hold an input element, UserOutput two paragraphs
					</li>
					<li>
						Output multiple UserOutput components in the App component (any
						paragraph texts of your choice)
					</li>
					<li>
						Pass a username (of your choice) to UserOutput via props and display
						it there
					</li>
					<li>
						Add state to the App component (=> the username) and pass the
						username to the UserOutput component
					</li>
					<li>
						Add a method to manipulate the state (=> an event-handler method)
					</li>
					<li>
						Pass the event-handler method reference to the UserInput component
						and bind it to the input-change event
					</li>
					<li>
						Ensure that the new input entered by the user overwrites the old
						username passed to UserOutput
					</li>
					<li>
						Add two-way-binding to your input (in UserInput) to also display the
						starting username
					</li>
					<li>
						Add styling of your choice to your components/ elements in the
						components - both with inline styles and stylesheets
					</li>
				</ol>
			</div>
		);
	}
}

export default App;
