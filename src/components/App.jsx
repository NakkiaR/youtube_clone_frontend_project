import React, { Component } from 'react';
import CommentsForm from './CommentsForm/CommentsForm';
import CommentsTable from './DisplayComments/displayComments';
import {SearchBar, VideoDetail, VideoList} from './index'
import {Grid} from '@mui/material';
import youtube from '../api/youtube';
// import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          videos: [],
          video_id: null,
          selectedVideo: null,
          comments: []

        }
    }
         
// componentDidMount() {
//   this.getComments();}

onVideoSelect = (video) => {
  console.log(video)
  this.setState({ 
    selectedVideo: video,
    video_id : video.id.videoId
  });
}
handleSearch = async (searchTerm) => {
  const response = await youtube.get('search', {
    params: {
      part: 'snippet',
      maxResults: 4,
      key: 'AIzaSyB1r_k732RGvq2htmK2tbqXeQXjvWYhkqs',
      q: searchTerm,
    }
  })
  console.log(response.data.items);
  this.setState({
    videos: response.data.items,
    video_id: response.data.items[0].id.videoId,
    selectedVideo: response.data.items[0]
  });
}

render() { 
  console.log("this.state", this.state);
  return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
          <SearchBar onFormSubmit={this.handleSearch} />
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-md-6 d-flex justify-content-center align-items-center'>
         </div>
         <CommentsForm addComment={(comments) => this.addComment(comments)} />
            <CommentsTable comments={this.state.comments}/> 

        </div>

      </div>
    // </div>
  );
}
}
export default App;
            
