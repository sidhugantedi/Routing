import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Glyphicon } from 'react-bootstrap';


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headerText: 'Hello, This is siddhartha Gantedi',
			
		}
	}
	render() {
		return (
			<div className = 'intro'>
			<h1>{this.state.headerText}</h1>
			
			</div>
			);
	}
}

export default Home;