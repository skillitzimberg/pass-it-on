import React from "react";
import PropTypes from "prop-types";

class SecondChild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aListOfStringsInSecondChild: []
    }
    this.addToListOfStrings = this.addToListOfStrings.bind(this);
  }

  addToListOfStrings(someText) {
    let newList = this.state.aListOfStringsInSecondChild.splice();
    newList.push(someText);
    this.setState({aListOfStringsInSecondChild: newList})
    console.log("addToListOfStrings as defined in Second Child", this.state);
  }

  render(props) {
    return (
      <main>
        <h2>Second Child of Main</h2>
        <div onClick={this.props.callMeAnythingYouWant}>. . . click me . . .</div>
        <div onClick={this.addToListOfStrings}>. . . Or click me . . .</div>
      </main>
    );
  }

}

SecondChild.propTypes = {
  callMeAnythingYouWant: PropTypes.func
}

export default SecondChild;
