export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS["phoneMax"]}px)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS["tabletMax"]}px)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS["laptopMax"]}px)`,
};
