import React from "react";
import {Paper} from '@mui/material'

const CommentsTable = ({comment}) => {
    if(!comment) return <div>Commentbox</div>

    return (
        <React.Fragment>
            <Paper elevation={6}>
            <iframe frameBorder='0' height='100%' width='100%' title='commentSection'>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comment.map((comment, id) => {
                            return (
                            <tr key={id}>
                                <td>{comment.comments}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            </iframe>

            </Paper>
        </React.Fragment>
    )
}

export default CommentsTable;