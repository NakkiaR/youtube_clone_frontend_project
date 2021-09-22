export default DisplayComments;

import React from "react";
import {Paper} from '@mui/material'
​
const CommentsTable = (props) => {
    // if(!props.comments) return <div>Commentbox</div>
    debugger;
    return (
        <React.Fragment>
            <div>
​                 <table>
                    <thead>
                        <tr>
                            <th>Comments</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        
                    {/* {console.log("Propdata: ", props.comments)} */}
                        {props.comments.map((record, index) => {
                            // {console.log("Comment Data: ", record.comment)}
                            return (​
                            <tr key={index}>
                                <td>{record.comment}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}
​
export default CommentsTable;

