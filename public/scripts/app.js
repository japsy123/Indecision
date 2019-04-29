"use strict";

console.log("app is running");

var template = React.createElement(
  "p",
  null,
  " This is JSX"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
