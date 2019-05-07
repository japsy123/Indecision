class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["thing one", "thing two", "thing three"]
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleAddOption(option) {
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in hand of computer";
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <Addoptions handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision {this.props.subTitle}</h1>
        <p>Put your hands in front of computer</p>
      </div>
    );
  }
}

const Action = props => {
  return (
    <div>
      <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
        What should we do ?
      </button>
    </div>
  );
};

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove all</button>
        <p> What are my options {this.props.options.length}</p>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class Addoptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleOption = this.handleOption.bind(this);
  }
  handleOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      this.props.handleAddOption(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
