import React from "react";

const Comments = (props) => {
    return (
        <tbody>
            <tr>
                <td>{props.comments}</td>
            </tr>
        </tbody>

    );
}
export default Comments;