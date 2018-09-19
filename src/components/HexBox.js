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
      b: Math.floor(Math.random() * 255),
      manuallyEntering: false
    };

    this.handleNudgeIncrement = this.handleNudgeIncrement.bind(this);
    this.handleManualHexValue = this.handleManualHexValue.bind(this);
  }

  handleNudgeIncrement(amt, nudged) {
    const newColor = keepMaxMin(parseInt(amt) + this.state[nudged]);

    this.setState(state => ({
      r: nudged === "r" ? newColor : state.r,
      g: nudged === "g" ? newColor : state.g,
      b: nudged === "b" ? newColor : state.b,
      manuallyEntering: false
    }));
  }

  handleManualHexValue(newHex) {
    if (newHex.length === 6) {
      this.setState({
        r: undisplay(newHex.slice(0, 2)),
        g: undisplay(newHex.slice(2, 4)),
        b: undisplay(newHex.slice(4, 6)),
        manuallyEntering: false
      });
    } else {
      this.setState({
        r: newHex.slice(0, 2),
        g: newHex.slice(2, 4),
        b: newHex.slice(4, 6),
        manuallyEntering: true
      });
    }
  }

  render() {
    const rgb = [this.state.r, this.state.g, this.state.b];
    const manual = this.state.manuallyEntering;

    return (
      <div
        className="hex-box"
        data-testid=""
        style={
          manual
            ? {
                // TODO: find a better gif or do this with css classes
                background:
                  "url('https://vignette.wikia.nocookie.net/uncyclopedia/images/1/17/Static.gif/revision/latest?cb=20051028174517') no-repeat center center fixed",
                backgroundSize: "cover"
              }
            : {
                background: `rgb(${rgb.join(", ")})`
              }
        }
      >
        {" "}
        <div className="control-wrapper">
          <div className="nudge-wrapper">
            <Nudge incr={this.handleNudgeIncrement} colorPart="r" />
            <Nudge incr={this.handleNudgeIncrement} colorPart="g" />
            <Nudge incr={this.handleNudgeIncrement} colorPart="b" />
          </div>
          <HexField
            value={manual ? `${rgb.join("")}` : `${rgb.map(display).join("")}`}
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
          maxLength="6"
        />
      </div>
    );
  }
}
