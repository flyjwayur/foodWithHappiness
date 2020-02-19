import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Button from './Button';
import 'jest-styled-components';

afterEach(cleanup);

describe('<Button />', () => {
  test('Click button to sort restaurant', async () => {
    // Arrange
    const handleSort = jest.fn();
    const label = 'Sort Restaurants';
    const ascending = true;
    const { getByTestId, getByText, findByTestId } = render(
      <Button label={label} onClickFn={handleSort} ascending={ascending} />
    );

    const button = await findByTestId('sort-button');

    // Act
    fireEvent.click(getByText('Sort Restaurants'));

    // Assert
    expect(handleSort).toHaveBeenCalledTimes(1);
    expect(getByTestId('sort-button')).toHaveTextContent('Sort Restaurants');
    expect(button).toMatchSnapshot();
  });
});
