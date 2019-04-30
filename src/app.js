console.log("app is running")

var template = <p> This is JSX!!</p>
var appObject = {
    title: "Root",
    subTitle: "RootSub",
    options: ["One", "Two"]
}
var template2 = (
    <div> 
        <p> {appObject.title} </p>
        {appObject.subTitle && <p>{appObject.subTitle}</p> } 
        <p>{ appObject.options.length >0 ? "Here are your options" : "No options" }</p>
        <ol>
            <li>Item One</li>
            <li> Item Two</li>
            <li> Item Three</li>
        </ol> 
    </div>
);

let count = 0;

const addOne = () => {
    console.log("Add")

}
const minusOne= () => {
    console.log("Minus")
}

const reset = () => {
    console.log("Reset")

}
var template3 =  (
    <div>
     <h1>Count: {count}</h1>
     <button onClick={addOne}>+1 </button>
     <button onClick={minusOne}> -1</button>
     <button onClick={reset}> Reset</button>
     </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot)