import React from "react";

export default class Nudge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nudgeAmt: 16
    };
    this.handleNudgeAmtChange = this.handleNudgeAmtChange.bind(this);
    this.handleNudgeUp = this.handleNudgeUp.bind(this);
    this.handleNudgeDown = this.handleNudgeDown.bind(this);
  }

  handleNudgeAmtChange(e) {
    this.setState({
      nudgeAmt: e.target.value
    });
  }

  handleNudgeUp() {
    this.props.incr(this.state.nudgeAmt, this.props.colorPart);
  }

  handleNudgeDown() {
    this.props.incr(-1 * this.state.nudgeAmt, this.props.colorPart);
  }

  render() {
    return (
      <div className="nudge" id={`${this.props.colorPart}-nudge`}>
        <button
          className="nudge-control nudge-up-button"
          onClick={this.handleNudgeUp}
        >
          +
        </button>
        <input
          className="nudge-control nudge-field"
          value={this.state.nudgeAmt}
          onChange={this.handleNudgeAmtChange}
          id={`${this.props.colorPart}-nudge-field`}
        />
        <button
          className="nudge-control nudge-down-button"
          onClick={this.handleNudgeDown}
        >
          -
        </button>
      </div>
    );
  }
}
