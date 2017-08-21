import React from 'react';
import　ReactDOM from 'react-dom'
import SearchBar from './component/search_bar'
const API_KEY ='AIzaSyDTdiN_eF4ZInFvp19-DuH-KDUwZMRm8DM';
const App= function(){
	return (
		<div>
	   <SearchBar/>
	</div>
	);
	
}

ReactDOM.render(<App />,document.querySelector('.container'));