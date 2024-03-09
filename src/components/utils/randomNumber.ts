// Generate random number within range 100 to 1000
export const generateRandomnNumber = (): number =>
  Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
