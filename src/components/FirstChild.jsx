import React from "react";
import PropTypes from "prop-types";
import FirstGrandChild from './FirstGrandChild';

function FirstChild(props) {

  return (
      <main className="firstChild">
        <h2>First Child of Main</h2>
        <div onClick={props.callHandleClick}>Click Me</div>
        <FirstGrandChild callHandleAnotherClick={props.callHandleAnotherClick}/>
      </main>
  );
}

FirstChild.propTypes = {
  callHandleClick: PropTypes.func,
  callHandleAnotherClick: PropTypes.func
}

export default FirstChild;
