import React from "react";

const CommentsTable = (props) => {
    return (
        <center>
        <div className="container jumbotron small" style={{maxHeight: '30vh'}}>
             <h3>Comment Section: </h3>
            <table className='table'>
                <tbody>
                    {props.comments.map((comment)=> {
                        return (
                        <tr key={comment.id}>
                            <td>{comment.comment}</td>
                            <td>{comment.likes}
                                <button className='btn btn-dark btn-sm' 
                                onClick={() => props.Like(comment.id)}>Like</button>
                            </td>
                            <td>{comment.dislikes}
                                <button className='btn btn-dark btn-sm' 
                                onClick={() => props.DisLike(comment.id)}>Dislike</button>
                            </td>
                            <td>
                            <button type="button" className='btn btn-dark btn-sm' 
                            onClick={() => props.Reply(comment.id)}>Reply</button>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </center>
    )
}
export default CommentsTable;