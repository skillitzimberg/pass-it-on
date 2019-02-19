import React from "react";
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

function Main() {

  function handleClick() {
    console.log("I am the original!")
  }

  function handleAnotherClick() {
    console.log("I am defined in Main & was passed as a prop to Main's grandchild.")
  }

  return (
    <div className="container">
      <main>
        <h1>Pass It On</h1>
        <FirstChild somethingWasClicked={handleClick} sendThisMethodToFirstGrandChild={handleAnotherClick}/>
        <SecondChild />
      </main>
    </div>
  );
}

export default Main;
