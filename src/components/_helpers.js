export function nudgeToValidHexPart(initial, additional) {
  if (!isNumber(parseInt(additional, 16))) {
    console.warn("You can only nudge by integers.");
    return parseInt(initial, 16)
      .toString(16)
      .toUpperCase();
  }
  const hexPart = parseInt(initial, 16) + parseInt(additional, 16);
  // too big? FF. too small? 0. neither? itself.
  return (hexPart > 255 ? 255 : hexPart < 0 ? "00" : hexPart)
    .toString(16)
    .toUpperCase();
}

// is it...a number?
// n is for number
export const isNumber = n => !isNaN(parseInt(n)) && isFinite(n);

// convert ugly rgb to display-worthy hex
// n is for number
export const display = n =>
  n.toString(16).length === 1
    ? 0 + n.toString(16).toUpperCase()
    : n.toString(16).toUpperCase();

// turn human friendly strings to machiney integers
// n is for number
export const undisplay = n => parseInt(n, 16);

// too big? FF. too small? 0. neither? itself. preserve max/min.
// n is for number
export const keepMaxMin = n => (n >= 255 ? 255 : n <= 0 ? 0 : n);
