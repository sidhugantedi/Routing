import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import './routing.css';




class App extends Component {
	render () {
		return (
			<div>
				<Header />
				<br />
				<br />
				<br />
				<br />
				<Main />
			</div>
			);
	}
}

export default App;