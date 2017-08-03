import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class Main extends Component {
	render () {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/About' component={About}/>
					<Route exact path='/Contact' component={Contact}/>
				</Switch>
			</div>
			);
	}
}

export default Main;