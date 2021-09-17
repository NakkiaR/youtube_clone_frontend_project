import React from "react";

const CommentsTable = (props) => {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {props.comment.map((comment, index) => {
                        return (
                        <tr key={index}>
                            <td>{comment.comment}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
);
}

export default CommentsTable;