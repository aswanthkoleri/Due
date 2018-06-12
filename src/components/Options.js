import React from 'react';
import Option from './Option';

export default (props)=>(
    <div className="container">
    You list : 
    {
        props.options.map((option)=> ( 
            <Option 
            key={option} 
            text={option}
            removeOne={props.removeOne}
            
            /> 
            ))
    }
    </div>
);