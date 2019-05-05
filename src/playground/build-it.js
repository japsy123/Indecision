var appRoot = document.getElementById("app");

let Visibility = true;

const change = () => {
  if (Visibility) {
    Visibility = false;
  } else {
    Visibility = true;
  }
  render();
};
const render = () => {
  const template = (
    <div>
      <p> Visibility Toggle</p>
      <button onClick={change}>
        {Visibility ? "Show details" : " Hide details"}
      </button>
      {Visibility ? "" : <p>This is it</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
