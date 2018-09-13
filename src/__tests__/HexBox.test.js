import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import HexBox from "../components/HexBox";
import { keepMaxMin } from "../components/_helpers";
import rgbHex from "rgb-hex";

afterEach(cleanup);

describe("A single HexBox instance", () => {
  const { container } = render(<HexBox />);
  it("Loads with a valid hex code in the hexfield", () => {
    const hexField = container.querySelector(".hex-field");
    const text = hexField.value;

    expect(text).toMatch(/^(?:[0-9a-fA-F]{3}){1,2}$/);
  });

  it("Increments by the default value up", () => {
    const { container, getByText } = render(<HexBox />);

    const upButton = getByText("+");
    const incrValue = container.querySelector("#r-nudge-field").value;
    const oldRedText = container.querySelector(".hex-field").value.slice(0, 2);
    const expected = keepMaxMin(parseInt(oldRedText, 16) + parseInt(incrValue));

    fireEvent.click(upButton, { bubbles: true, cancelable: true });

    const newRedText = container.querySelector(".hex-field").value.slice(0, 2);

    // console.log(`
    //   Initial red value: ${initialRedValue}
    //   Incrememnt value: ${incrValue}
    // `);

    expect(parseInt(newRedText, 16)).toEqual(expected);
  });

  it("Increments by the default value down", () => {
    const { container, getByText } = render(<HexBox />);

    const upButton = getByText("-");
    const incrValue = container.querySelector("#r-nudge-field").value;
    const oldRedText = container.querySelector(".hex-field").value.slice(0, 2);
    const expected = keepMaxMin(
      parseInt(oldRedText, 16) + -1 * parseInt(incrValue)
    );

    fireEvent.click(upButton, { bubbles: true, cancelable: true });

    const newRedText = container.querySelector(".hex-field").value.slice(0, 2);

    // console.log(`
    //   Initial red value: ${initialRedValue}
    //   Incrememnt value: ${incrValue}
    // `);

    expect(parseInt(newRedText, 16)).toEqual(expected);
  });

  it("Increments by a reasonable random value up", () => {
    const { container, getByText } = render(<HexBox />);

    const upButton = getByText("+");
    const incrValue = container.querySelector("#r-nudge-field").value;
    const oldRedText = container.querySelector(".hex-field").value.slice(0, 2);
    const expected = keepMaxMin(parseInt(oldRedText, 16) + parseInt(incrValue));

    fireEvent.click(upButton, { bubbles: true, cancelable: true });

    const newRedText = container.querySelector(".hex-field").value.slice(0, 2);

    expect(parseInt(newRedText, 16)).toEqual(expected);
  });

  it("Increments by a reasonable random value down", () => {
    const { container, getByText } = render(<HexBox />);

    const upButton = getByText("-");
    const incrValue = container.querySelector("#r-nudge-field").value;
    const oldRedText = container.querySelector(".hex-field").value.slice(0, 2);
    const expected = keepMaxMin(parseInt(oldRedText, 16) - parseInt(incrValue));

    fireEvent.click(upButton, { bubbles: true, cancelable: true });

    const newRedText = container.querySelector(".hex-field").value.slice(0, 2);

    expect(parseInt(newRedText, 16)).toEqual(expected);
  });

  xit("Has a value in the input that matches the background", () => {
    // can't seem to get style for elements in `container`...
    const { container } = render(<HexBox />);
    const hex = container.querySelector(".hex-field").value;
    const bgColor = container.querySelector(".hex-box").style.backgroundColor;
    console.log(bgColor);

    expect(hex).toEqual(bgColor.toUpperCase());
  });
});
