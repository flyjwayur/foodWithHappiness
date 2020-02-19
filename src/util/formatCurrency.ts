export const formatCurrency = (currency: number) => {
  const currencyString = currency.toString();

  if (currencyString.length > 0 && currencyString.length < 3) {
    const cent = currencyString.slice(0);
    return `0.${cent}`;
  } else if (currencyString.length === 3) {
    const euro = currencyString.slice(0, 1);
    const cent = currencyString.slice(1, 3);
    return `${euro}.${cent}`;
  }
  return undefined;
};
