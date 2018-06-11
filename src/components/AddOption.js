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
        <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.addOption}>
        <input type="text" name="optionInput" />
        <button>Add Option</button>
        </form>
        </div>
        );
        return content;
    }
}