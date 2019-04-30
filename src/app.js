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
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot)