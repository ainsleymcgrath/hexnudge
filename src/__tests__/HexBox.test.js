import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import HexBox from "../components/HexBox";
import { nudgeToValidHexPart } from "../components/_helpers";

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
    const initialRedValue = container
      .querySelector(".hex-field")
      .value.slice(0, 2);
    const expectedValue = nudgeToValidHexPart(initialRedValue, incrValue);

    fireEvent.click(upButton, { bubbles: true, cancelable: true });

    const newRedValue = container.querySelector(".hex-field").value.slice(0, 2);

    console.log(`
      Initial red value: ${initialRedValue}
      Incrememnt value: ${incrValue}
    `);

    expect(newRedValue).toEqual(expectedValue);
  });

  it("Increments by the default value down", () => {
    const { container, getByText } = render(<HexBox />);

    const upButton = getByText("-");
    const incrValue = container.querySelector("#r-nudge-field").value;
    const initialRedValue = container
      .querySelector(".hex-field")
      .value.slice(0, 2);
    const expectedValue = nudgeToValidHexPart(initialRedValue, -1 * incrValue);

    fireEvent.click(upButton, { bubbles: true, cancelable: true });

    const newRedValue = container.querySelector(".hex-field").value.slice(0, 2);

    console.log(`
      Initial red value: ${initialRedValue}
      Incrememnt value: ${incrValue}
    `);

    expect(newRedValue).toEqual(expectedValue);
  });

  it("Increments by a reasonable random value up", () => {
    const { container, getByText } = render(<HexBox />);

    const upButton = getByText("+");
    const incrValue = Math.floor(Math.random() * 255);
    const initialRedValue = container
      .querySelector(".hex-field")
      .value.slice(0, 2);
    const expectedValue = nudgeToValidHexPart(initialRedValue, incrValue);

    fireEvent.click(upButton, { bubbles: true, cancelable: true });

    const newRedValue = container.querySelector(".hex-field").value.slice(0, 2);

    console.log(`
      Initial red value: ${initialRedValue}
      Incrememnt value: ${incrValue}
    `);

    expect(newRedValue).toEqual(expectedValue);
  });

  it("Increments by a reasonable random value down", () => {
    const { container, getByText } = render(<HexBox />);

    const upButton = getByText("-");
    const incrValue = Math.floor(Math.random() * 255);
    const initialRedValue = container
      .querySelector(".hex-field")
      .value.slice(0, 2);
    const expectedValue = nudgeToValidHexPart(initialRedValue, -incrValue);

    fireEvent.click(upButton, { bubbles: true, cancelable: true });

    const newRedValue = container.querySelector(".hex-field").value.slice(0, 2);

    console.log(`
      Initial red value: ${initialRedValue}
      Incrememnt value: ${incrValue}
    `);

    expect(newRedValue).toEqual(expectedValue);
  });

  it("Has a value in the input that matches the background", () => {
    expect().toBe(false);
  });
});
