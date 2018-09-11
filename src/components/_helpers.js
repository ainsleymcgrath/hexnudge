export const nudgeToValidHexPart = (initial, additional) => {
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
};

export const isNumber = n => !isNaN(parseInt(n)) && isFinite(n);
