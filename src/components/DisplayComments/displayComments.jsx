// import React, {Component} from 'react';
// import '../VideoList/videoList';
// // import "./CommentsTable.css";
// import axios from 'axios';

// class CommentsTable extends Component {
//   constructor(props) {
//     super(props);
//       }
  

//   render() { 
//     return (
//       <div className="app-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Comments</th>
//         </tr>
//         </thead>
//         <tbody>
//           {console.log("Props: ", this.props.videoList)}
//           {this.props.videoList.map((videoItem, index) => {
//             return(
//               <tr key={index} >
//                 <td>{videoItem.title}</td>
                
//               </tr> 
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//     );
//   }
// }
 
// export default CommentsTable;







import React from "react";
import {Paper} from '@mui/material'

const CommentsTable = (props) => {
    // if(!props.comments) return <div>Commentbox</div>
    debugger;
    return (
        <React.Fragment>
            <Paper elevation={6}>
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {console.log("Propdata: ", props.comments)} */}
                        {props.comments.map((record, index) => {
                            // {console.log("Comment Data: ", record.comment)}
                            return (

                            <tr key={index}>
                                <td>{record.comment}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            </Paper>
        </React.Fragment>
    )
}

export default CommentsTable;