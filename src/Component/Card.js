import React from 'react';

function Card(props) {
    return (
        <div className={props.info.box}>
            <h2>{props.info.header}</h2>
            <p>{props.info.content}</p>
            <div className="image" />
        </div>
    )
}

export default Card;