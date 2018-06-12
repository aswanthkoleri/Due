import React from 'react';

export default (props)=>(
    <div className="option" >
    <div className="option__text">
    {props.count}. {props.text}
    </div>
    <button
    className="button button--link"
     onClick={(e) => props.removeOne(props.text)}>
    Remove 
    </button>
    </div>
);
