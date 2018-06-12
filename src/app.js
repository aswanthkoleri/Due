import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';

import './assets/styles.scss';

const Layout =(props)=>{
    return (
        <div>
        {props.children}
        </div>
    ); 
};


ReactDOM.render((<Layout>
    <IndecisionApp/>
</Layout>),document.getElementById('app'));