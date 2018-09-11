import "jest";
import { nudgeToValidHexPart } from "../components/_helpers";

describe("The nudgeToValidHexPart function", () => {
  it("Returns the initial value for when given a non-integer (decimal)", () => {
    expect(nudgeToValidHexPart("FF", 1.1)).toEqual("FF");
  });

  it("Returns the initial value for when given a non-integer (letter)", () => {
    expect(nudgeToValidHexPart("A0", "r")).toEqual("A0");
  });

  it("Returns the correct increment when given valid inputs", () => {
    const expectedValue = (parseInt("AA", 16) + parseInt(10, 16))
      .toString(16)
      .toUpperCase();
    expect(nudgeToValidHexPart("AA", 10)).toEqual(expectedValue);
  });

  it("Returns 255 for nudge to over FF", () => {
    expect(nudgeToValidHexPart("00", 256)).toEqual("FF");
  });

  it("Returns 0 for nudge to below 00", () => {
    expect(nudgeToValidHexPart("FF", -256)).toEqual("00");
  });
});
