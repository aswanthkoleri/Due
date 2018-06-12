import React from 'react';
import Option from './Option';

export default (props)=>(
    <div className="container">

    {props.options.length === 0 && <p className="widget__message"> Please enter an option to get started </p>}
    {
        props.options.map((option,index)=> ( 
            <Option 
            key={option} 
            text={option}
            count={index + 1}
            removeOne={props.removeOne}
            /> 
            ))
    }
    </div>
);