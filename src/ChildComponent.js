import React from "react";

const ChildComponent = (props) => {
  return (
    <>
      {/* <button onClick={props.greetHandler}>Call From Child Component</button> */}
      <button onClick={() => props.greetHandler("Pari")}>
        Call From Child With Params
      </button>
    </>
  );
};

export default ChildComponent;
