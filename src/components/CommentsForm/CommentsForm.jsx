import React, { Component } from 'react';

class CommentsForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        video_id: '',
        comments: '',
      }
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
    this.props.addComment(comment);
    this.setState({
      video_id: '',
      comments: ''
    });
  }
  render() { 
    return (
      <div className="container jumbotron small" style={{maxHeight: '30vh'}}>
        <form className='addComment' onSubmit={this.handleSubmit} >
            <input placeholder= "New Comment" name="comments" type="text" onChange={this.handleChange} value={this.state.comments}/>
            <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}
 
export default CommentsForm;