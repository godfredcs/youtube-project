import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import Config from './services/Config';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [], selectedVideo: null };

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: Config.API_KEY, term }, (videos) => {
			this.setState({ videos, selectedVideo: videos[0] });
		});
	}

	render() {
		const videoSearch = _.debounce(term => { this.videoSearch(term)}, 300);

		return (
			<div>
				<Header />
				<SearchBar onSearchTermChange={ videoSearch } />
				<VideoDetail video={ this.state.selectedVideo } />
				<VideoList 
					videos={ this.state.videos } 
					onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
				/>
			</div>
		);
	}
}

ReactDom.render(<App/>, document.querySelector('.container'));