/* import validator from 'validator';

console.log(validator.isEmail('aswanth9495@gmail.com'));
console.log("Webpack is working !") */

import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import Header from './Header';
import OpenModal from './OpenModal';

/* const template = (
    <div>
    <h1> This is my first page using webpack</h1>
    </div>
);  

ReactDOM.render(template,document.getElementById('app')); */
const title = "Due";
const subtitle = "Do what you have to do !";
// let options = ["Thing one","Thing two"];
export default class IndecisionApp extends React.Component {
    state = {
        options : this.props.options,
        optionSelected : this.props.optionSelected
    };
    removeAll=()=>{
        this.setState(()=>({ options : [] }));
    }
    removeOne=(optionToRemove)=>{
        console.log("Its working",optionToRemove);
        this.setState((prevState) =>{
            return { 
                options : prevState.options.filter((option)=>  {
                    return optionToRemove !==option;
                }
            )}
        });
    }
    getRandom=()=>{
        const randomOption=Math.floor(Math.random()*this.state.options.length);
        const selected = this.state.options[randomOption];
        this.setState(()=>({
            optionSelected : selected
        }));
        /* alert(selected); */
    }
    closeModal=()=>{
        this.setState(()=>({
            optionSelected : false
        }));
        
    }
/* Function to add an option  */
    addOption=(input)=>{
        /* console.log("Add option ! "); */
        /* Do validation */
        if(!input) {
            return 'Provide an option please';
        }
        else if(this.state.options.indexOf(input) > -1 ){
            return `This already exists !`
        }
        this.setState((prevState)=>{
            return {
                options : prevState.options.concat(input)
            };
        });
    }
     /* Lifecycle methods */x

     componentDidMount() {
        try {
          const json = localStorage.getItem('options');
          const options = JSON.parse(json);
    
          if (options) {
            this.setState(() => ({ options }));
          }
        } catch (e) {
          // Do nothing at all
        }
      }
      componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
          const json = JSON.stringify(this.state.options);
          localStorage.setItem('options', json);
        }
      }

    render() {
        
        const jsx = (
            <div >
            <Header title={title} subtitle={subtitle}/>
            <div className="container">
            <Action 
            hasOptions={this.state.options.length > 0} 
            options={this.state.options}
            removeAll={this.removeAll}
            getRandom={this.getRandom}
            />
            <div className="widget">
            <Options options={this.state.options} 
            removeOne={this.removeOne}
            />
            <AddOption
            addOption={this.addOption}
            />
            </div>  
            <OpenModal
            optionSelected={this.state.optionSelected}
            closeModal={this.closeModal}
             />
             </div>
            </div>
        );
        return jsx;
    }
}

IndecisionApp.defaultProps = {
    options : [],
    optionSelected : undefined
};

