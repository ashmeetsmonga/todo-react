import React, { Component } from 'react';
import classes from './App.module.css';
import Item from './components/Item';

class App extends Component {
	state = {
		tasks: [ 'Go and play', 'Have Dinner', 'Study Hard', 'Sleep Soundly', 'Watch Witcher' ]
	};

	addItem = (event) => {
		if (event.keyCode === 13) {
			const newTasks = [ ...this.state.tasks ];
			newTasks.unshift(event.target.value);
			this.setState({ tasks: newTasks });
			event.target.value = '';
		}
	};

	deleteItem = (ind) => {
		const newTasks = [ ...this.state.tasks ];
		newTasks.splice(ind, 1);
		this.setState({ tasks: newTasks });
	};

	render() {
		const taskList = this.state.tasks.map((task, id) => (
			<Item key={id} index={id} delete={this.deleteItem}>
				{task}
			</Item>
		));

		return (
			<div className={classes.App}>
				<h1>Todo List</h1>
				<div>
					<input type="text" onKeyUp={(event) => this.addItem(event)} />
				</div>

				{taskList}
			</div>
		);
	}
}

export default App;
