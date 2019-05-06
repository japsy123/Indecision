class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Visibility: true
    };
  }

  change() {
    this.setState(prevState => {
      return {
        Visibility: !prevState.Visibility
      };
    });
  }
  render() {
    return (
      <div>
        <p> Visibility Toggle</p>
        <button onClick={this.change}>
          {this.Visibility ? "Show details" : " Hide details"}
        </button>
        {this.Visibility ? "" : <p>This is it</p>}
      </div>
    );
  }
}

var appRoot = document.getElementById("app");

ReactDOM.render(<Visibility />, appRoot);
