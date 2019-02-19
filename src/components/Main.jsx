import React from "react";
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

function Main() {

  function handleClick() {
    console.log("My name is handleClick. I am defined in Main & was passed as a prop to Main's first child.")
  }

  function handleAnotherClick() {
    console.log("My name is handleAnotherClick. I am defined in Main & was passed as a prop to Main's first grandchild.")
  }

  function handleAClickAndDoSomethingToSecondChild(givenText) {
    console.log(givenText)
  }

  return (
    <div className="container">
      <main>
        <h1>Pass It On</h1>
        <FirstChild callHandleClick={handleClick} callHandleAnotherClick={handleAnotherClick}/>
        <SecondChild callMeAnythingYouWant={handleAClickAndDoSomethingToSecondChild} givenText={"My name is handleAClickAndDoSomethingToSecondChild. I am defined in Main."}/>
      </main>
    </div>
  );
}

export default Main;
