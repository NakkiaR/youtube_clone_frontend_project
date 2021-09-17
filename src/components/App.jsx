import React, { Component } from 'react';
import CommentsForm from './CommentsForm/commentsForm';
import CommentsTable from './DisplayComments/displayComments';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          comments: []
        }
    }
         
componentDidMount() {
  this.getComments();
}

async getComments() {
  let response = await axios.get('http://127.0.0.1:8000/comments/test');
  //console.log(response.data[2].artist);
  this.setState({
    comments: response.data
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

render() { 
  console.log("this.state", this.state);
  return(
    <div>
        <CommentsForm addComment={(comments) => this.addComment(comments)}/>
        <CommentsTable comment={this.state.comments}/>
    </div> 
  );
}
}
    
export default App;