import React from "react"

const PostSummary =({post})=>{
    return (
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{post.title}</span>
            <p>Posted by Project 3 team</p>
            <p className="grey-text">july 6th</p>
        </div>
    </div>
    )
}


export default PostSummary