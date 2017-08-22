import React, {Component} from 'react';
import　ReactDOM from 'react-dom';
import SearchBar from './component/search_bar';
import YTSerch from 'youtube-api-search';
import VideoList from "./component/video_list";

const API_KEY ='AIzaSyDTdiN_eF4ZInFvp19-DuH-KDUwZMRm8DM';

class App extends Component{
	  constructor(props) {
    super(props);

      this.state={videos:[]};
     YTSerch({key: API_KEY,trem:'surfboard'},(videos)=>{ this.setState({videos});
  this.setState({videos});
});
    };
     

	render(){	
		return (
		<div>
	   <SearchBar/>
	   <VideoList videos= {this.state.videos}/>
	</div>
	);
	}

}

ReactDOM.render(<App />,document.querySelector('.container'));