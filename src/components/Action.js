import React from 'react';

export default (props)=>(
    <div>
    <button 
    onClick={props.getRandom}
    disabled={!props.hasOptions}
    className="big-button"
    >PICK RANDOM </button>
    <div className="widget-header">
    <h3>ITEMS DUE : </h3>
    <button
    className="button button--link"
    onClick={props.removeAll}
    >CLEAR</button>
    </div>
    </div>
);
