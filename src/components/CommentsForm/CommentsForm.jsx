import React, { Component } from 'react';
​
class CommentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video_id: '',
            comment: ''
          }
    }
​
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
        //   video_id: event.target.value,  
          comment: event.target.value
      });
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
        // console.log("comment form state", this.state)
        // console.log("comment form state.comment", this.state.comment)
        this.props.addComment(this.state);      
    }
​
    render() { 
        return (
            <form onSubmit={this.handleSubmit} >
                <label>Enter new comment</label>
                <input onChange={this.handleChange} value={this.state.comment}/>
                <button type='submit'>Save</button>
             </form>
          );
    }
}
 
export default CommentsForm;