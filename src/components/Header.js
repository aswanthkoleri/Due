import React from 'react';

const Header= (props)=>(
    <div>
    <h1>{props.title}</h1>
    <h3>{props.subtitle}</h3>
    </div>
);
/* To set default title  */

Header.defaultProps = { 
    title : 'This is the default Header '
}

export default Header;
