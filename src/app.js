console.log("app is running")

var template = <p> This is JSX!!</p>
var appObject = {
    title: "Root",
    subTitle: "RootSub"
}
var template2 = (
    <div> 
        <p> {appObject.title} </p>
        <p> {appObject.subTitle} </p>
        <p>25</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot)