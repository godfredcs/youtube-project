import React, { Component } from 'react';
import ReactDom from 'react-dom';

import List from './components/list';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '', eggs: [1, 2, 3, 4, 5]};
	}

	render() {
		return (
			<div>
				<p>This is what you expect to see right?</p>
				<List eggs={this.state.eggs} />
			</div>
		);
	}
}

ReactDom.render(<App/>, document.querySelector('.container'));