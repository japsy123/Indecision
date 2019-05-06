class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
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
          {this.state.Visibility ? "Show details" : " Hide details"}
        </button>
        {this.state.Visibility ? "" : <p>This is it</p>}
      </div>
    );
  }
}

var appRoot = document.getElementById("app");

ReactDOM.render(<Visibility />, appRoot);
