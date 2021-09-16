import React from "react";

const CommentsTable = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                   <th>Comments</th> 
                </tr>
            </thead>
            {props.mapComments()}
        </table>
    );
}

export default CommentsTable;