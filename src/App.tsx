import React from 'react';
import RestaurantsPage from './pages/RestaurantsPage';
import PageLayout from './components/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <h1>Happy food delivery and great experience :D</h1>
      <RestaurantsPage />
    </PageLayout>
  );
};

export default App;
