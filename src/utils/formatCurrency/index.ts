const formatCurrency = (value: number) => {
  const withTwoDecimalPlaces = value.toFixed(2);

  const withCommas = formatWithCommas(withTwoDecimalPlaces);

  return `£${withCommas}`;
};

const formatWithCommas = (value: string): string => {
  let [leftSide, rightSide] = value.split('.');

  if (leftSide) {
    leftSide = leftSide.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return `${leftSide}.${rightSide}`;
};

export default formatCurrency;
