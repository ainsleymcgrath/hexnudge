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
// s is for string
export const undisplay = s => (isNumber(parseInt(s, 16)) ? parseInt(s, 16) : s);

// too big? FF. too small? 0. neither? itself. preserve max/min.
// n is for number
export const keepMaxMin = n => (n >= 255 ? 255 : n <= 0 ? 0 : n);

export const isHex = s => s.match(/^(?:[0-9a-fA-F]{3}){1,2}$/);
