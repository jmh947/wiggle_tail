

import React from 'react'

function PostDetails(props) {
    const id=props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Post Title - {id}</div>
                <p>Loren ipsum</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by project3</div>
                    <div>july 6</div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails
