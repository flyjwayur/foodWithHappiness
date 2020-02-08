import React from 'react';
import RestaurantsPage from './pages/RestaurantsPage';
import MainHeader from './components/MainHeader/MainHeader';
const App = () => {
  return (
    <div>
      <MainHeader titleText="Looking for a good weekend meal?" descriptionText="Happy food delivery and great experience" />
      <RestaurantsPage />
    </div>
  );
};

export default App;
