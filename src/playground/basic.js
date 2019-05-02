
console.log("app is running")

var template = <p> This is JSX!!</p>
var appObject = {
    title: "Root",
    subTitle: "RootSub",
    options: ["One", "Two"]
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        appObject.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
}
var appRoot = document.getElementById('app');


const render = () => {

    var template2 = (
        <div> 
            <p> {appObject.title} </p>
            {appObject.subTitle && <p>{appObject.subTitle}</p> } 
            <p>{ appObject.options.length >0 ? "Here are your options" : "No options" }
            </p>
            <p>{appObject.options.length}</p>
            <ol>
               {appObject.options.map((option)=>{
                    return <li key={option}>Option: {option}</li>
               })}
            </ol> 
            <form onSubmit= {onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add options</button>
            </form>
        </div>
    );

    ReactDOM.render(template2, appRoot)

}

render();