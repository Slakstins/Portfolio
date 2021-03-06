import React from "react"

function Thumbnail(props){
    return(
      <div className="project">
        <a href="props.subURL">
            <div className="thumbnail-image">
                <img src={props.image} alt={props.title}/>
            </div>
            <div className="project-title">{props.title}</div>
            <div className="project-category">{props.category}</div>
        </a>
       </div>
    )
}

export default Thumbnail;   