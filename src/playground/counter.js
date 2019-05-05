class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.hanldeAddOne = this.hanldeAddOne.bind(this);
    this.hanldeMinusOne = this.hanldeMinusOne.bind(this);
    this.hanldeReset = this.hanldeReset.bind(this);

    this.state = {
      count: 0
    };
  }

  hanldeAddOne() {
    console.log("clicked", this);
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  hanldeMinusOne() {
    console.log("clicked", this);
  }

  hanldeReset() {
    console.log("clicked", this);
  }

  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={this.hanldeAddOne}> +1</button>
        <button onClick={this.hanldeMinusOne}> -1</button>
        <button onClick={this.hanldeReset}> Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
// let count = 0;

// const addOne = () => {
//   count++;
//   console.log("Add");
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   console.log("Minus");
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   console.log("Reset");
//   renderCounterApp();
// };
// const renderCounterApp = () => {
//   const template3 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1 </button>
//       <button onClick={minusOne}> -1</button>
//       <button onClick={reset}> Reset</button>
//     </div>
//   );
//   ReactDOM.render(template3, appRoot);
// };

// renderCounterApp();
