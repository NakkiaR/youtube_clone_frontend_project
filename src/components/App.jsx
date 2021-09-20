import React, { Component } from 'react';
import CommentsForm from './CommentsForm/CommentsForm';
import CommentsTable from './DisplayComments/displayComments';
import {SearchBar, VideoDetail, VideoList} from './index'
import {Grid} from '@mui/material';
import youtube from '../api/youtube';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          videos: [],
          selectedVideo: null,
          comments: []
          
        }
    }
         
componentDidMount() {
  this.getComments();
  this.handleSubmit();
}

async getComments() {
  let response = await axios.get(`http://127.0.0.1:8000/comments/test/`);
  this.setState({
    comments: response.data
  })
}

addComment = async (comment) => {
  console.log("Posting body: ", comment)
  await axios.post('http://127.0.0.1:8000/post_comment/', comment)
  .then(response => this.setState({
        comments: [...this.state.comments, response.data]
    }))
}

onVideoSelect = (video) => {
  this.setState({ selectedVideo: video });
}

handleSubmit = async (searchTerm) => {
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
     videos: response.data.items, selectedVideo: response.data.items[0]
  });
}

render() { 
  console.log("this.state", this.state);
  return(
    <Grid justify='center' container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={this.handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={this.state.selectedVideo}/>
          </Grid>
          <Grid item xs={6}>
            {console.log("State comments:", this.state.comments)}
            <CommentsForm addComment={(comments) => this.addComment(comments)} />
            <CommentsTable comments={this.state.comments}/>
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
}
    
export default App;
            