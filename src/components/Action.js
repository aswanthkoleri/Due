import React from 'react';

export default (props)=>(
    <div>
    <button 
    onClick={props.getRandom}
    disabled={!props.hasOptions}
    >What should I do ?</button>
    <button
    onClick={props.removeAll}
    >Clear</button>
    </div>
);
