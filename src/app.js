const title = "React Todo";
const subtitle = "Do what you have to do !";
let options = ["Thing one","Thing two"];
class IndecisionApp extends React.Component {
    render() {
        const jsx = (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action options={options}/>
            <Options options={options}/>
            <AddOption/>
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
        this.removeAll = this.removeAll.bind(this);
    }
    getOption(){
        alert("You got the option ! ");
    }
    removeAll(){
        console.log(this.props.options);
        
        
    }
    render() {
        const content=(
            <div>
            <button onClick={this.getOption}>What should I do ?</button>
            <button onClick={this.removeAll}>Clear</button>
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
    addOption(e){
        e.preventDefault();
        const input = e.target.elements.optionInput.value;
        if(input){
            options.push(input);
            e.target.elements.optionInput.value="";
        }
        console.log("This fucking shit is working ! ");
    }
    render(){
        const content = (
        <div>
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