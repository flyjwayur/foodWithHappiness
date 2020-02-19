import { formatCurrency } from './formatCurrency';
import cases from 'jest-in-case';

describe('formating the currency', () => {
  cases(
    'formatCurrency(threeDigitNum)',
    opts => {
      expect(formatCurrency(opts.threeDigitNum)).toBe(opts.formattedNum);
    },
    [
      { threeDigitNum: 350, formattedNum: `3.50` },
      { threeDigitNum: 390, formattedNum: `3.90` },
      { threeDigitNum: 230, formattedNum: `2.30` }
    ]
  );

  cases(
    'formatCurrency(moreThanThreeDigitNum)',
    opts => {
      expect(formatCurrency(opts.moreThanThreeDigitNum)).toBeUndefined();
    },
    [
      { moreThanThreeDigitNum: 35000 },
      { moreThanThreeDigitNum: 23456 },
      { moreThanThreeDigitNum: 234534534 },
      { moreThanThreeDigitNum: 2345341234342 }
    ]
  );

  cases(
    'formatCurrency(lessThanThreeDigitNum)',
    opts => {
      expect(formatCurrency(opts.lessThanThreeDigitNum)).toBe(opts.formattedNum);
    },
    [
      { lessThanThreeDigitNum: 70, formattedNum: `0.70` },
      { lessThanThreeDigitNum: 80, formattedNum: `0.80` }
    ]
  );

  cases(
    'formatCurrency(0)',
    opts => {
      expect(formatCurrency(opts.zeroNum)).toBeUndefined;
    },
    [{ zeroNum: 0, formattedNum: undefined }]
  );
});
