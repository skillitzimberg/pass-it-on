import React from "react";

function FirstGrandChild
(props) {
  return (
      <main>
        <h2>First Grand Child of App</h2>
        <div onClick={props.methodGivenToGrandChild}>Click me!</div>
      </main>
  );
}


export default FirstGrandChild;
