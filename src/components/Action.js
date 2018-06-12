import React from 'react';

export default (props)=>(
    <div className="container">
    <button 
    onClick={props.getRandom}
    disabled={!props.hasOptions}
    className="big-button"
    >What should I do ?</button>
    
    <button
    className="button button--link"
    onClick={props.removeAll}
    >Clear</button>
    </div>
);
