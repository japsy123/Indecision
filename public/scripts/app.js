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

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        appObject.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};
var appRoot = document.getElementById('app');

var render = function render() {

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
            "p",
            null,
            appObject.options.length
        ),
        React.createElement(
            "ol",
            null,
            appObject.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    "Option: ",
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add options"
            )
        )
    );

    ReactDOM.render(template2, appRoot);
};

render();
