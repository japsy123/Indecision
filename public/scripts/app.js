"use strict";

console.log("app is running");

var template = React.createElement(
    "p",
    null,
    " This is JSX!!"
);
var appObject = {
    title: "Root",
    subTitle: "RootSub",
    options: ["One", "Two"]
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
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            " Item Two"
        ),
        React.createElement(
            "li",
            null,
            " Item Three"
        )
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
