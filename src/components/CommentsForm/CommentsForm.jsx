import React, { Component } from "react";

class CommentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ''
        }
    }

handleSubmit(event) {
    event.preventDefault();

    let comment = {
        comment: this.state.comments
    }
    this.props.addComment(comment);
    this.setState({
        comments:''
    });
}
handleChange(event) {
    event.persist(); //what does persist do??

    this.setState({
        [event.target.name]: event.target.value
    })
}
render(){
    return(
        <div>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <label>Comment:</label>
                    <input
                    type="text"
                    name="comments"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.comments}/>
                    <button type='submit'>Add Comment</button>
                </div>
            </form>
        </div>
    )
  }
}

export default CommentsForm;