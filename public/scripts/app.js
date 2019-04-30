"use strict";

console.log("app is running");

var template = React.createElement(
    "p",
    null,
    " This is JSX!!"
);
var appObject = {
    title: "Root",
    subTitle: "RootSub"
};
var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        " ",
        appObject.title,
        " "
    ),
    React.createElement(
        "p",
        null,
        " ",
        appObject.subTitle,
        " "
    ),
    React.createElement(
        "p",
        null,
        "25"
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
