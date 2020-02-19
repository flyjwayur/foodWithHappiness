import { sortByName } from './sortArray';
import cases from 'jest-in-case';

describe('sorting restaurants', () => {
  const dummyRestaurtant = {
    blurhash: 'UUKJMXv|x]oz0gtRM{V@AHRQwvxZXSs9s;o0',
    city: 'Helsinki',
    currency: 'EUR',
    delivery_price: 390,
    description: 'Asenneburgeri',
    image:
      'https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90',
    location: [24.941325187683105, 60.169938852212965],
    name: 'Social Burgerjoint Citycenter',
    online: false,
    tags: ['hamburger', 'fries']
  };

  const testData = [
    { ...dummyRestaurtant, name: 'Social Burgerjoint Citycenter' },
    {
      ...dummyRestaurtant,
      name: 'Momotoko Citycenter'
    },
    {
      ...dummyRestaurtant,
      name: "Luckiefun's Kaivokatu"
    },
    {
      ...dummyRestaurtant,
      name: "Fafa's Sokos"
    }
  ];

  const ascendingData = [
    {
      ...dummyRestaurtant,
      name: "Fafa's Sokos"
    },
    {
      ...dummyRestaurtant,
      name: "Luckiefun's Kaivokatu"
    },
    {
      ...dummyRestaurtant,
      name: 'Momotoko Citycenter'
    },
    {
      ...dummyRestaurtant,
      name: 'Social Burgerjoint Citycenter'
    }
  ];

  const descendingData = [
    {
      ...dummyRestaurtant,
      name: 'Social Burgerjoint Citycenter'
    },
    {
      ...dummyRestaurtant,
      name: 'Momotoko Citycenter'
    },
    {
      ...dummyRestaurtant,
      name: "Luckiefun's Kaivokatu"
    },
    {
      ...dummyRestaurtant,
      name: "Fafa's Sokos"
    }
  ];

  const testDataWithAccentedCharacters = [
    { ...dummyRestaurtant, name: 'Sandro Cityk\u00e4yt\u00e4v\u00e4' },
    {
      ...dummyRestaurtant,
      name: "Fafa's Cityk\u00e4yt\u00e4v\u00e4"
    },
    {
      ...dummyRestaurtant,
      name: "Luckiefun's Kaivokatu"
    },
    {
      ...dummyRestaurtant,
      name: "Fafa's Sokos"
    }
  ];

  const ascendingDataWithAccentedCharacters = [
    {
      ...dummyRestaurtant,
      name: "Fafa's Cityk\u00e4yt\u00e4v\u00e4"
    },
    {
      ...dummyRestaurtant,
      name: "Fafa's Sokos"
    },
    {
      ...dummyRestaurtant,
      name: "Luckiefun's Kaivokatu"
    },
    { ...dummyRestaurtant, name: 'Sandro Cityk\u00e4yt\u00e4v\u00e4' }
  ];

  //With jest-in-case, test cases can be more provided easily.
  cases(
    'sortByName(restaurantArr, ascend)',
    opts => {
      expect(sortByName(opts.restaurantArr, opts.ascend)).toEqual(ascendingData);
    },
    [{ restaurantArr: testData, ascend: true }]
  );

  cases(
    'sortByName(restaurantArr, descend)',
    opts => {
      expect(sortByName(opts.restaurantArr, opts.ascend)).toEqual(descendingData);
    },
    [{ restaurantArr: testData, ascend: false }]
  );

  cases(
    'sortByName(AccentedRestaurantArr, ascend)',
    opts => {
      expect(sortByName(opts.AccentedRestaurantArr, opts.ascend)).toEqual(
        ascendingDataWithAccentedCharacters
      );
    },
    [{ AccentedRestaurantArr: testDataWithAccentedCharacters, ascend: true }]
  );
});
