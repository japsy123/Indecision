console.log("app is running")

var template = <p> This is JSX!!</p>

var template2 = (
    <div> 
        <p> Jal </p>
        <p> Panchal </p>
        <p>25</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot)