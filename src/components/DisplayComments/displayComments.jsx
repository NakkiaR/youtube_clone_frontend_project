import React from "react";
// import {Paper} from '@mui/material';

const CommentsTable = (props) => {
    return (
        <React.Fragment>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.comments.map((record, index)=> {
                            return (
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
export default CommentsTable;