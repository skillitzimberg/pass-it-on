import React from "react";
import PropTypes from "prop-types";

function FirstGrandChild(props) {
  return (
      <main>
        <h2>First Grand Child of Main</h2>
        <div onClick={props.callHandleAnotherClick}>Click me!</div>
      </main>
  );
}

FirstGrandChild.propTypes = {
  callHandleAnotherClick: PropTypes.func
}

export default FirstGrandChild;
