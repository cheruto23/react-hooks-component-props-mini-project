import React from "react";

function Article(props){
    const date = props.date || "January 1, 1970"; 
    return(
        <div>
        <h3>{props.title}</h3>
        <small>{date}</small>
        <p>{props.preview}</p>
        </div>
    )
}

export default Article;