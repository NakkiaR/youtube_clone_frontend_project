import React from "react";

class CommentsForm extends Component {
    state = {
        comments: ''
    }

handleSubmit(event) {
    event.preventDefault();

    let comment = {
        comment: this.state.comments
    }
    this.props.addComment(comment);
}
handleChange(event) {
    event.persist();

this.MediaStreamAudioDestinationNode({
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
                    name="comment"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.comments}
                    />
                </div>
            </form>
        </div>
    )
  }
}

export default CommentsForm;