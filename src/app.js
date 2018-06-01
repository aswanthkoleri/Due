const title = "Due";
const subtitle = "Do what you have to do !";
// let options = ["Thing one","Thing two"];
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.removeAll=this.removeAll.bind(this);
        this.state = {
            options : props.options
        };
        this.getRandom=this.getRandom.bind(this);
        this.addOption=this.addOption.bind(this);
        this.removeOne=this.removeOne.bind(this);
    }
    removeAll(){
        this.setState(()=>({ options : [] }));
    }
    removeOne(optionToRemove){
        console.log("Its working",optionToRemove);
        this.setState((prevState) =>{
            return { 
                options : prevState.options.filter((option)=>  {
                    return optionToRemove !==option;
                }
            )}
        });
    }
    getRandom(){
        const randomOption=Math.floor(Math.random()*this.state.options.length);
        const selected = this.state.options[randomOption];
        alert(selected);
    }
/* Function to add an option  */
    addOption(input){
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

    render() {
        const jsx = (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action 
            hasOptions={this.state.options.length > 0} 
            options={this.state.options}
            removeAll={this.removeAll}
            getRandom={this.getRandom}
            />
            <Options options={this.state.options} 
            removeOne={this.removeOne}
            />
            <AddOption
            addOption={this.addOption}
            />
            </div>
        );
        return jsx;
    }
}

IndecisionApp.defaultProps = {
    options : []
};
const Header =(props)=>{
    const content=(
        <div>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        </div>
    );
    return content; 
}

/* To set default title  */

Header.defaultProps = {
    title : 'This is the default Header '
}

const Action=(props)=>{
    const content=(
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
    return content;
}

const Options =(props)=>{
const content = (
    <div>
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
    </div>);
    return content;
}

const Option =(props)=>{
    const content=(
        <div>
        {props.text}
        <button onClick={(e) => props.removeOne(props.text)}>
        Remove 
        </button>
        </div>
        );
        console.log("work");
        return content;
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error : undefined
        }
    }

    addOption(e){
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


ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));