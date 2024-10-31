const priseArray: number[] = [300, 100, 120, 1000, 500];

const TAX = 8;

const taxIncluded = priseArray.map((prise) =>
  Math.floor(prise + (prise * TAX) / 100)
);
