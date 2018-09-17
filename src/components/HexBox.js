import React from "react";
import Nudge from "./Nudge";

import uuidv4 from "uuid";
import { keepMaxMin, display, undisplay, isHex } from "./_helpers";

export default class HexBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255)
    };

    this.handleNudgeIncrement = this.handleNudgeIncrement.bind(this);
    this.handleManualHexValue = this.handleManualHexValue.bind(this);
  }

  handleNudgeIncrement(amt, nudged) {
    const newColor = keepMaxMin(amt + this.state[nudged]);

    this.setState(state => ({
      r: nudged === "r" ? newColor : state.r,
      g: nudged === "g" ? newColor : state.g,
      b: nudged === "b" ? newColor : state.b
    }));
  }

  handleManualHexValue(newHex) {
    if (true) {
      this.setState({
        r: undisplay(newHex.slice(0, 2)),
        g: undisplay(newHex.slice(2, 4)),
        b: undisplay(newHex.slice(4, 6))
      });
    }
  }

  render() {
    const rgb = [this.state.r, this.state.g, this.state.b];
    return (
      <div
        className="hex-box"
        data-testid=""
        style={{
          backgroundColor: `rgb(${rgb.join(", ")})`
        }}
      >
        {" "}
        <div className="control-wrapper">
          <div className="nudge-wrapper">
            <Nudge incr={this.handleNudgeIncrement} colorPart="r" />
            <Nudge incr={this.handleNudgeIncrement} colorPart="g" />
            <Nudge incr={this.handleNudgeIncrement} colorPart="b" />
          </div>
          <HexField
            value={`${rgb.map(display).join("")}`}
            handleManualHexValue={this.handleManualHexValue}
          />
        </div>
      </div>
    );
  }
}

class HexField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.props.handleManualHexValue(e.target.value);
  }

  render() {
    return (
      <div className="hex-field-wrapper">
        #
        <input
          className="hex-field"
          value={this.props.value}
          label="A box for your hex code"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
