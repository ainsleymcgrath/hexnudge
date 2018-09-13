import "jest";
import {
  nudgeToValidHexPart,
  isNumber,
  display,
  keepMaxMin
} from "../components/_helpers";

xdescribe("The nudgeToValidHexPart function", () => {
  // will probably get rid of this guy
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

describe("The isNumber function", () => {
  it("says false when not a number", () => {
    expect(isNumber("doodah")).toBe(false);
  });

  it("returns true when it is a number", () => {
    expect(isNumber(5)).toBe(true);
  });

  // TODO: checks for strings
  // TODO: hecks for base 16 and base 10 numbers
});

describe("The display function", () => {
  it("adds a leading 0 when given a 0", () => {
    expect(display(0)).toEqual("00");
  });

  it("adds a leading zero when given 15", () => {
    expect(display(15)).toEqual("0F");
  });
});

describe("The keepMaxMin function", () => {
  it("turns a 300 to a 255", () => {
    expect(keepMaxMin(300)).toEqual(255);
  });

  it("turns a -3 to a 0", () => {
    expect(keepMaxMin(-3)).toEqual(0);
  });
});
