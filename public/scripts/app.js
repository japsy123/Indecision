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
    appObject.subTitle && React.createElement(
        "p",
        null,
        appObject.subTitle
    ),
    React.createElement(
        "p",
        null,
        appObject.options.length > 0 ? "Here are your options" : "No options"
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

var count = 0;

var addOne = function addOne() {
    console.log("Add");
};
var minusOne = function minusOne() {
    console.log("Minus");
};

var reset = function reset() {
    console.log("Reset");
};
var template3 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1 "
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        " -1"
    ),
    React.createElement(
        "button",
        { onClick: reset },
        " Reset"
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot);
