const title = "React Todo";
const subtitle = "Do what you have to do !";
// let options = ["Thing one","Thing two"];
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.removeAll=this.removeAll.bind(this);
        this.state = {
            options : ["Thing one ","Thing two "]
        };
        this.getRandom=this.getRandom.bind(this);
        this.addOption=this.addOption.bind(this);
    }
    removeAll(){
        this.setState(()=>{
            return {
                options : []
            };
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
            <Options options={this.state.options}/>
            <AddOption
            addOption={this.addOption}
            />
            </div>
        );
        return jsx;
    }
}
class Header extends React.Component {
    render() {
        const content=(
            <div>
            <h1>{this.props.title}</h1>
            <h3>{this.props.subtitle}</h3>
            </div>
        );
        return content; 
    }
}

class Action extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const content=(
            <div>
            <button 
            onClick={this.props.getRandom}
            disabled={!this.props.hasOptions}
            >What should I do ?</button>
            <button
            onClick={this.props.removeAll}
            >Clear</button>
            </div>
        );
        return content;
    }
}

class Options extends React.Component {
    render(){
    const content = (
    <div>
    You list : 
    {
        this.props.options.map((option)=> <Option key={option} text={option}/> )
    }
    </div>);
        return content;
    }
}
class Option extends React.Component {
    render(){
        const content=(
        <div>
        {this.props.text}
        </div>
        );
        console.log("work");
        return content;
    }
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