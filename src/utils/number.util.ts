export const toDollars = (amount: number): number => amount / 100;

export const toPercent = (amount: number): number => {
  const percent: number = amount * 100;
  return percent % 1 !== 0
    ? parseFloat((amount * 100).toFixed(2))
    : percent;
};

export const getWholeNumber = (number: number) => parseInt(number.toString(), 10);

export const getDecimalPoint = (number: number) => {
  const float = number.toFixed(2);
  const decimalIndex = float.indexOf('.');
  return float.substr(decimalIndex);
}

export const numberWithCommas = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
