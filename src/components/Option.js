import React from 'react';

export default (props)=>(
    <div>
    {props.text}
    <button onClick={(e) => props.removeOne(props.text)}>
    Remove 
    </button>
    </div>
);
