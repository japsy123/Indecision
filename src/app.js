console.log("app is running")

var template = <p> This is JSX!!</p>
var appObject = {
    title: "Root",
    subTitle: "RootSub",
    options: ["One", "Two"]
}
var appRoot = document.getElementById('app');

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

    count++;
    console.log("Add")
    renderCounterApp()

}
const minusOne= () => {
    count--;
    console.log("Minus")
    renderCounterApp()
}

const reset = () => {

    count = 0;
    console.log("Reset")
    renderCounterApp()

}
const renderCounterApp  = () => {
    const template3 =(
        <div>
         <h1>Count: {count}</h1>
         <button onClick={addOne}>+1 </button>
         <button onClick={minusOne}> -1</button>
         <button onClick={reset}> Reset</button>
         </div>
    )
    ReactDOM.render(template3, appRoot)
}  


renderCounterApp();