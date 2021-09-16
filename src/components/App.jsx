import React, { Component } from 'react';
import CommentsForm from './components/CommentsForm';
import CommentsTable from './components/CommentsTable';
// import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    comments: ('')
  }
         
   
  
componentDidMount() {
  this.getAllComments();
}

async getAllComments() {
  let response = await axios.get('http://127.0.0.1:8000/comments/');
  //console.log(response.data[2].artist);
  this.setState({
    comment: response.data
  })
}

async postComment() {
  let response = await axios.post('http://127.0.0.1:8000/comments/');
  //console.log(response.data[2].comment);
  this.setState({
    comments: response.data
  })
}

addComment(comments) {
    console.log(comments);
    axios.post('http://127.0.0.1:8000/comments/', comments)
    .then(response => this.setState({
        comments: [...this.state.comments, response.data]
    }))

}
mapComments() {
    return this.state.comments.map(comments =>
        <Comment
        key={video_id}
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