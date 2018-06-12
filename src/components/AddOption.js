import React from 'react';

export default class AddOption extends React.Component {
    state = {
            error : undefined
        }

    addOption=(e)=>{
        e.preventDefault();
        const input = e.target.elements.optionInput.value;
        const error = this.props.addOption(input);
        e.target.elements.optionInput.value="";
        this.setState(()=>{
            return {
                error 
            };
        });
    }
    render(){
        const content = (
        <div className="container">
        {this.state.error && <p className="add-option-error">{this.state.error}</p> }
        <form className="add-option" onSubmit={this.addOption}>
        <input className="add-option__input" type="text" name="optionInput" />
        <button className="button">Add Option</button>
        </form>
        </div>
        );
        return content;
    }
}