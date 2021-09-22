import React, { Component } from 'react';
import {SearchBar, VideoDetail, VideoList, CommentsForm, CommentsTable, ReplyForm} from './index'
import youtube from '../api/youtube';
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          videos: [],
          video_id: null,
          selectedVideo: null,
          comments: [],
        }
    }
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
  this.getComments(this.state.video_id);
}
getComments = async (video_id) =>{
  console.log(video_id)
  let response = await axios.get(`http://127.0.0.1:8000/comments/${video_id}/`);
  this.setState({
    comments: response.data
  })
}
addComment = async () =>{
  await axios.post('http://127.0.0.1:8000/post_comment/')
  .then(response => this.setState({
      comments: [...this.state.comments, response.data]
  }))
}

addLike = (id) => {
  axios.get(`http://127.0.0.1:8000/comments/like/${id}/`);
  this.getComments();
};

addDislike = (id) => {
  axios.get(`http://127.0.0.1:8000/comments/dislike/${id}/`);
  this.getComments();
};

addReply = (video_id, reply) => {
  axios.post(`http://127.0.0.1:8000/reply/`, video_id, reply);
  this.getComments();
};
render() { 
  console.log("this.state", this.state);
  return(
    <div className='container-fluid'>
      <div className='row m-2'>
        <div className='col-md-12'>
          <SearchBar onFormSubmit={this.handleSearch} />
        </div>
      </div>
      <div>
        <div className='row align-items-center mt-5 justify-content-around'>
          <div className='col-md-5'>
          <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className='col-md-5'>
          <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6'>
          <CommentsTable 
            comments={this.state.comments}
            Like={this.addLike}
            DisLike={this.addDislike}
            Reply={this.addReply}/>
            <div className="row">
              <div className="col-8 col-sm-6">
              <CommentsForm videoId={this.state.video_id} addComment={this.addComment}/>
              <div className="row">
                <div className="col-8 col-sm-6">
                <ReplyForm videoId={this.state.video_id} addReply={this.addReply}/>
              </div>
              </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  );
}
}


export default App;
