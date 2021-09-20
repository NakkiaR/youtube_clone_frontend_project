import React, { Component } from 'react';



class CommentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: '',

          }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
          comments: event.target.value
      });
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      
        this.props.addComment(this.state.comments);      
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit} >
                <label>Enter new comment</label>
                <input onChange={this.handleChange} value={this.state.comments}/>
                <button type='submit'>Save</button>
             </form>
          );
    }
}
 
export default CommentsForm;


// import React, { Component } from "react";

// class CommentsForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             comments: ''
//         }
//     }

// handleSubmit = (event) => {
//     event.preventDefault();

//     let comment = {
//         comment: this.state.comments
//     }
//     this.props.addComment(comment);
//     this.setState({
//         comments:''
//     });
// }
// handleChange = (event) => {
//     event.persist(); 

//     this.setState({
//         [event.target.name]: event.target.value
//     })
// }
// render(){
//     return(
//         <div>
//             <form onSubmit={(event) => this.handleSubmit(event)}>
//                 <div>
//                     <label>Comment:</label>
//                     <input
//                     type="text"
//                     name="comments"
//                     onChange={(event) => this.handleChange(event)}
//                     value={this.state.comments}/>
//                     <button type='submit'>Add Comment</button>
//                 </div>
//             </form>
//         </div>
//     )
//   }
// }

// export default CommentsForm;