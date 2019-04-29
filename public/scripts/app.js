"use strict";

console.log("app is running");

var template = React.createElement(
    "p",
    null,
    " This is JSX!!"
);

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        " Jal "
    ),
    React.createElement(
        "p",
        null,
        " Panchal "
    ),
    React.createElement(
        "p",
        null,
        "25"
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
