console.log("This is running");
/* var template=(
<div>
<h1 id="heading"> This is the template :</h1>
<p>This is some info</p>
<ol>
<li>Item one</li>
<li>Item two</li>
</ol>
</div>
); */
/* const user={
    name : "Aswanth",
    age : "20",
    place : "Kozhikode "
};

function getLocation(location){
    if(location){
    return <p>Location : {location}</p>;
    }
}
const templateTwo = (
<div>
<h1>
{user.name ? user.name.toUpperCase() : "Anonymous"}
</h1>
{ user.age >=20 && <p>Age : {user.age}</p>}
{getLocation(user.place)} 
</div>
); */
/* let count=0;
const addOne = () => {
    count++;
    renderCounting();
};
const minusOne = () => {
    count--;
    renderCounting();
};
const reset = () => {
    count=0;
    renderCounting();
}; */

const app = {
    title : "Todo list",
    subtitle : "Your list",
    options : [
        "Item one",
        "Item two"
    ]
};

/* const getOption = () => {
    let optionTemplate ="";
    app.options.forEach((option) => {
        return <li>option</li>  
    });
    
}; */

const addOption=(e)=>{
    e.preventDefault();
    console.log(e.target.elements.optionInput.value);
    const optionValue=e.target.elements.optionInput.value;
    if(optionValue){
    app.options.push(optionValue);
    e.target.elements.optionInput.value;
    renderTemplate();
    }
    console.log("Option added ");
    console.log(app.options);
};
const clearList=()=>{
    app.options = [];
    renderTemplate();
}
const appRoot = document.getElementById('app');
const renderTemplate= () =>{
const todoTemplate = (
    <div>
    <h1>{app.title}</h1>
    <h2>{app.subtitle} {app.options.length}</h2>
    <button onClick={clearList}>Clear</button> 
    <ol>
    {
        app.options.map((options)=>{
            return <li key={options}>{options}</li>
        })
    }
    </ol>
    
    <form onSubmit={addOption}>
    <input type="text" name="optionInput" />
    <button>Add Option</button>
    
    </form>
    </div>
);
ReactDOM.render(todoTemplate,appRoot);
};
renderTemplate();

/* To convert this to babel.Type the command below :
 babel src/app.js --out-file=public/scripts/app.js --presets=env,react */

 /* We use const because const doesn't allow us to reassign the variable. Which will help in preventing the errors.*/
/* Arrow function  */
/* const square = (x) => {
    return x*x;
} */
/* or */
/* 
const square = (x) => x*x;  */
/* this. is no longer bounded */
/* arguments object is no longer bounded */