import React from 'react'

function Photo (props) {
    const {photo, title, date, text} = props;


    return (
        <div>
            <h2>{ title }</h2>
            <h3>{date}</h3>
            <img src={photo} alt={title}></img>
            <p>{text}</p>

        </div>
    )
}



export default Photo;