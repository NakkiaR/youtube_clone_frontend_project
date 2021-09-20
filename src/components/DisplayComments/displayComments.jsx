import React, {Component} from 'react';
// import "./CommentsTable.css";
import axios from 'axios';

class CommentsTable extends Component {
  constructor(props) {
    super(props);
      }
  

  render() { 
    return (
      <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Comments</th>
        </tr>
        </thead>
        <tbody>
          {console.log("Props: ", this.props.videoList)}
          {this.props.videoList.map((videoItem, index) => {
            return(
              <tr key={index} >
                <td>{videoItem.title}</td>
                
              </tr> 
            )
          })}
        </tbody>
      </table>
    </div>
    );
  }
}
 
export default CommentsTable;







// import React from "react";
// import {Paper} from '@mui/material'

// const CommentsTable = ({comment}) => {
//     if(!comment) return <div>Commentbox</div>

//     return (
//         <React.Fragment>
//             <Paper elevation={6}>
//             <iframe frameBorder='0' height='100%' width='100%' title='commentSection'>
//             <div>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Comments</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {comment.map((comment, id) => {
//                             return (
//                             <tr key={id}>
//                                 <td>{comment.comments}</td>
//                             </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//             </iframe>

//             </Paper>
//         </React.Fragment>
//     )
// }

// export default CommentsTable;