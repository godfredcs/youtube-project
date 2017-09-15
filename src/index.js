import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import Config from './services/Config';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [], selectedVideo: null };

		YTSearch({key: Config.API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});
	}

	render() {
		return (
			<div>
				<Header />
				<SearchBar />
				<VideoDetail video={ this.state.selectedVideo } />
				<VideoList videos={ this.state.videos } />
			</div>
		);
	}
}

ReactDom.render(<App/>, document.querySelector('.container'));