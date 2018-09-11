import React from "react";
import { render, cleanup } from "react-testing-library";
import Nudge from "../components/Nudge";

afterEach(cleanup);

describe("A single nudge instance", () => {
  const { container } = render(<Nudge colorPart="g" />);
  it("Renders with a number in the field", () => {
    const input = container.querySelector("input");
    expect(typeof parseInt(input.value, 16)).toBe("number");
  });
});
