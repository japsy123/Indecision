"use strict";

var appRoot = document.getElementById('app');

var Visibility = true;

var change = function change() {

    if (Visibility) {

        Visibility = false;
    } else {
        Visibility = true;
    }
    render();
};
var render = function render() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            " Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: change },
            Visibility ? "Show details" : " Hide details"
        ),
        Visibility ? "" : React.createElement(
            "p",
            null,
            "This is it"
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
