import React, { Component } from 'react';
import axios from 'axios';
import CommentsTable from './DisplayComments/displayComments';


class CommentsForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        video_id: '',
        comments: '',
      }
  }
  async getComments(videoId) {
    let response = await axios.get(`http://127.0.0.1:8000/comments/${videoId}/`);
    this.setState({
      comments: response.data
    })
  }
  async addComment(test){
    await axios.post('http://127.0.0.1:8000/post_comment/', test)
    .then(response => this.setState({
          comments: [...this.state.comments, response.data]
      }))
  }
  handleChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let comment = {
      video_id: this.props.videoId,
      comment : this.state.comments
    }
    this.addComment(comment);
    this.setState({
      video_id: '',
      comments: ''
    });
  }
  render() { 
    return (
      <div className="container jumbotron small" style={{maxHeight: '30vh'}}>
        <h3>Comment Section: </h3>
        <form className='addComment' onSubmit={this.handleSubmit} >
            <input placeholder= "New Comment" name="comments" type="text" onChange={this.handleChange} value={this.state.comments}/>
            <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}
 
export default CommentsForm;