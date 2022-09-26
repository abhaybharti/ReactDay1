import React, { children } from "react";

const Greet = ({ name, age, sex, children }) => {
  // const { name, age, sex } = props;
  return (
    <div>
      Hello {name} {age} {sex}
      {children}
    </div>
  );
};

export default Greet;
