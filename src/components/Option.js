import React from 'react';

export default (props)=>(
    <div >
    {props.text}
    <button
    className="button button--link"
     onClick={(e) => props.removeOne(props.text)}>
    Remove 
    </button>
    </div>
);
