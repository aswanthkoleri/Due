import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './assets/styles.scss';


const Layout =(props)=>{
    return (
        <div>
        <p>Header</p>
        {props.children}
        <p>footer</p>
        </div>
    ); 
};


ReactDOM.render((<Layout>
    <IndecisionApp/>
</Layout>),document.getElementById('app'));