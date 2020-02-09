import { formatCurrency } from '../../util/formatCurrency';

describe('formating the currency', () => {
  test('The currency has exactly 3 digits', () => {
    expect(formatCurrency(350)).toBe('3.50');
  });

  test('The currency has more than 3 digits', () => {
    expect(formatCurrency(35000)).toBeUndefined();
  });

  test('The currency has less than 3 digits', () => {
    expect(formatCurrency(20)).toBeUndefined();
  });
});
