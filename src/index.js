import React, {Component} from 'react';
import　ReactDOM from 'react-dom';
import SearchBar from './component/search_bar';
import YTSerch from 'youtube-api-search';
import VideoList from "./component/video_list";
import VideoDetail from "./component/video_detail";
const API_KEY ='AIzaSyBmNsWn9E4rQgKRqizqTkdFdoF6zPQoPhY';

class App extends Component{
	  constructor(props) {
    super(props);

      this.state={
      	videos:[],selectedVideo: null

      };
     YTSerch({key: API_KEY,trem:'surfboard'},(videos)=>{ this.setState({videos});
  this.setState({
  	videos:videos,
  	selectedVideo:videos[0]

  });
});
    };
     

	render(){	
		return (
		<div>
	   <SearchBar/> 
	    <VideoDetail video={this.state.selectedVideo} />
	   <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
       
	  
	</div>
	);
	}

}

ReactDOM.render(<App />,document.querySelector('.container'));