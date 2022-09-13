import React from "react";

const Greet = ({ name, age, sex }) => {
  // const { name, age, sex } = props;
  return (
    <div>
      Hello {name} {age} {sex}
    </div>
  );
};

export default Greet;
