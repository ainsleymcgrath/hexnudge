import React from "react";
import Nudge from "./Nudge";

import uuidv4 from "uuid";
import { nudgeToValidHexPart } from "./_helpers";

export default class HexBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      r: Math.floor(Math.random() * parseInt("FF", 16))
        .toString(16)
        .toUpperCase(),
      g: Math.floor(Math.random() * parseInt("FF", 16))
        .toString(16)
        .toUpperCase(),
      b: Math.floor(Math.random() * parseInt("FF", 16))
        .toString(16)
        .toUpperCase()
    };
    this.handleNudgeIncrement = this.handleNudgeIncrement.bind(this);
    this.handleManualHexValue = this.handleManualHexValue.bind(this);
  }

  handleNudgeIncrement(amt, which) {
    const newColor = nudgeToValidHexPart(this.state[which], amt);

    this.setState({
      r: which === "r" && newColor != this.state.r ? newColor : this.state.r,
      g: which === "g" && newColor != this.state.g ? newColor : this.state.g,
      b: which === "b" && newColor != this.state.b ? newColor : this.state.b
    });
  }

  handleManualHexValue(newHex) {
    this.setState({
      r: newHex.slice(0, 2),
      g: newHex.slice(2, 4),
      b: newHex.slice(4, 6)
    });
  }

  render() {
    return (
      <div
        className="hex-box"
        data-testid=""
        style={{
          backgroundColor: `#${this.state.r}${this.state.g}${this.state.b}`
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
            rgb={`${this.state.r}${this.state.g}${this.state.b}`}
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
    this.state = {};
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
          value={this.props.rgb}
          label="A box for your hex code"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
