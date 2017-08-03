import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../routing.css';


class Header extends Component {
	render () {
		return (
			<div  className = 'navbar navbar-default' role="navigation">
				<div className="container-fluid">
					<div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle hamburger-icon" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top">The Coding pen</a>
                </div>
                <div className="collapse navbar-collapse ">
					<ul className="nav navbar-nav">
						<li className="page-scroll"><NavLink to ='/'>Home</NavLink></li>
						<li className="page-scroll"><NavLink to ='/About'>About</NavLink></li>
						<li className="page-scroll"><NavLink to ='/Contact'>Contact</NavLink></li>
					</ul>
                </div>
				</div>
			</div> 

			);
	}
}
export default Header;


