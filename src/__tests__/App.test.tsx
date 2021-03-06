import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  test('App snapshot is not broken', async () => {
    const { findByTestId } = render(<App />);
    const app = await findByTestId('app');
    expect(app).toMatchSnapshot();
  });
});
