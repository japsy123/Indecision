import React from "react";

const Header = props => {
  return (
    <div>
      <h1>Indecision {props.subTitle}</h1>
      <p>Put your hands front of computer</p>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

export default Header;
