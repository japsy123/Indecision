import React from "react";

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      <p> What are my options {props.options.length}</p>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
