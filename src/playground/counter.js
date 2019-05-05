class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Count</h1>
        <button> +1</button>
        <button> -1</button>
        <button> Reset</button>
      </div>
    );
  }
}

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
