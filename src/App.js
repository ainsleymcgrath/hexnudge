import React from "react";
import HexBox from "./components/HexBox";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nBoxes: 1
    };
  }

  render() {
    return (
      <div className="app">
        <HexBox />
      </div>
    );
  }
}
