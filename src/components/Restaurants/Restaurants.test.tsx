import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Restaurants from './Restaurants';
import 'jest-styled-components';

afterEach(cleanup);

describe('<Restaurants />', () => {
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

  test('Display lists of restaurants', async () => {
    // Arrange
    const isContentsLoading = false;

    const { findByTestId } = render(
      <Restaurants restaurantsList={testData} isContentsLoading={isContentsLoading} />
    );

    const restaurants = await findByTestId('restaurant-list');

    // Act
    // Assert
    expect(restaurants).toMatchSnapshot();
  });
});
