import React, { Component } from 'react';
import CommentsForm from './CommentsForm/commentsForm';
import CommentsTable from './CommentsTable/commentsTable';
import axios from 'axios';
import Comments from './Comments/Comments';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          comments: []
        }
    }
         
componentDidMount() {
  this.getAllComments();
}

async getAllComments() {
  let response = await axios.get('http://127.0.0.1:8000/comments/test');
  //console.log(response.data[2].artist);
  this.setState({
    comment: response.data
  })
}

async addComment(comments) {
  console.log(comments);
  debugger
  await axios.post('http://127.0.0.1:8000/post_comment/', comments)
  .then(response => this.setState({
        comments: [...this.state.comments, response.data]
    }))
}

mapComments() {
    return this.state.comments.map(comments =>
        <Comments
        key={comments.id}
        comment={comments}
        />
    )
}
  
render() { 
          console.log("this.state", this.state);
        return(
        <div>
            <CommentsForm addComment={(comments) => this.addComment(comments)}/>

            <CommentsTable mapComments={() => this.mapComments()}/>
        </div> 

            );
        }
     }
    
 
export default App;