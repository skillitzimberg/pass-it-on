import React from "react";
import FirstGrandChild from './FirstGrandChild';

function FirstChild(props) {

  return (
      <main className="firstChild">
        <h2>First Child of App</h2>
        <div onClick={props.somethingWasClicked}>Click Me</div>
        <FirstGrandChild methodGivenToGrandChild={props.sendThisMethodToFirstGrandChild}/>
      </main>
  );
}


export default FirstChild;
