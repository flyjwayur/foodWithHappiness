import React from 'react';
import RestaurantsPage from './pages/RestaurantsPage';

const App = () => {
  return (
    // In the future, the router can be implemented for exploring different pages
    <div data-testid="app">
      <RestaurantsPage />
    </div>
  );
};

export default App;
