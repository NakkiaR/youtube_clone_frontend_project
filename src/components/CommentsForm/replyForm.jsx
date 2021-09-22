import React, { Component } from 'react';

class ReplyForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        video_id: '',
        reply: '',
      }
  }
  handleChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let reply = {
      video_id: this.props.videoId,
      reply : this.state.reply
    }
    this.props.addReply(reply);
    this.setState({
      video_id: '',
      reply: ''
    });
  }
  render() { 
    return (
      <div className="container jumbotron small" style={{maxHeight: '30vh'}}>
        <form className='Reply' onSubmit={this.handleSubmit} >
            <input placeholder= "Reply" name="reply" type="text" onChange={this.handleChange} value={this.state.reply}/>
            <button type='submit'>Reply</button>
        </form>
      </div>
    );
  }
}
 
export default ReplyForm;