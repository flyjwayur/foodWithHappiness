export const formatCurrency = (currency: number) => {
  const currencyString = currency.toString();
  if (currencyString.length === 3) {
    const euro = currencyString.slice(0, 1);
    const cent = currencyString.slice(1, 3);
    return `${euro}.${cent}`;
  }
};
