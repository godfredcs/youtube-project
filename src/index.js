import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<p>This page is working now</p>
			</div>
		);
	}
}

ReactDom.render(<App/>, document.querySelector('.container'));