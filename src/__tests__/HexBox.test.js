import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import HexBox from "../components/HexBox";
import { nudgeToValidHexPart } from "../components/_helpers";

afterAll(cleanup);
const { container, getByText } = render(<HexBox />);

describe("A single HexBox instance", () => {
  it("Loads with a valid hex code in the hexfield", () => {
    const hexField = container.querySelector(".hex-field");
    const text = hexField.value;

    expect(text).toMatch(/^(?:[0-9a-fA-F]{3}){1,2}$/);
  });

  it("Increments by the default value up", () => {
    // const { container, getByText } = render(<HexBox />);

    const upButton = getByText("+");
    const incrValue = container.querySelector("#r-nudge-field").value;
    const initialRedValue = container
      .querySelector(".hex-field")
      .value.slice(0, 2);
    const expectedValue = nudgeToValidHexPart(
      initialRedValue,
      incrValue
    ).toString(16);
    // console.log(initialRedValue);

    fireEvent.click(upButton, {});

    const newValue = container.querySelector(".hex-field").value.slice(0, 2);
    expect(newValue).toEqual(expectedValue);
  });

  it("Increments by the default value down", () => {
    expect().toBe(false);
  });

  it("Increments by a reasonable random value up", () => {
    expect().toBe(false);
  });

  it("Increments by a reasonable random value down", () => {
    expect().toBe(false);
  });

  it("Has a value in the input that matches the background", () => {
    expect().toBe(false);
  });
});
