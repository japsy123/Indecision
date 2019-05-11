import React from "react";
import ReactDOM from "react-dom";
import Action from "./components/Action";
import Addoptions from "./components/Addoptions";
import Header from "./components/Header";
import Options from "./components/Options";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["thing one", "thing two", "thing three"]
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  componentDidMount() {
    const json = localStorage.getItem("options");
    const options = JSON.parse(json);

    this.setState(() => ({ options }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  handleDeleteOption(optionToRemove) {
    console.log(optionToRemove);
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  handleAddOption(option) {
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
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
          handleDeleteOption={this.handleDeleteOption}
        />
        <Addoptions handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
