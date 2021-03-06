import React, { useState, useEffect, FunctionComponent } from 'react';
import styled from 'styled-components';
import data from '../data/restaurants.json';
import { sortByName } from '../util/sortArray';
import Restaurants from '../components/Restaurants/Restaurants';
import { IDataRestaurant } from '../index.d';
import PageLayout from '../components/PageLayout/PageLayout';
import Button from '../components/Button/Button';
import MainHeader from '../components/MainHeader/MainHeader';
// @ts-ignore
import image from './../assets/fruitImage.png';
/* https://basarat.gitbook.io/typescript/type-system/intro/d.ts */
import SubHeader from '../components/SubHeader/SubHeader';

const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;

const RestaurantsPage: FunctionComponent = () => {
  const [isContentsLoading, setContentsLoading] = useState(true);
  // Arrange restaurants in ascending order initially
  const [ascend, setAscend] = useState(true);
  const [sortedRestaurants, setSortedRestaurants] = useState(
    sortByName(data.restaurants, ascend) || []
  );

  // Check a content loading status to display a skeleton screen as a placeholder when data is loading
  useEffect(() => {
    setContentsLoading(false);
  }, [sortedRestaurants]);

  const handleSort = () => {
    const prevAscend = ascend;
    setAscend(!prevAscend);
    setSortedRestaurants((prevRestaurants: IDataRestaurant[]) =>
      sortByName(prevRestaurants as IDataRestaurant[], !prevAscend)
    );
  };

  return (
    <PageLayout>
      <MainHeader
        titleText="Looking for a good weekend meal?"
        descriptionText="Happy food delivery and great experience"
        backgroundUrl={image}
      />
      <SubHeader titleText="Discover Helsinki" />
      <CenterButton>
        <Button label="Sort Restaurants" onClickFn={() => handleSort()} ascending={ascend} />
      </CenterButton>
      <div>
        {sortedRestaurants.length ? (
          <Restaurants restaurantsList={sortedRestaurants} isContentsLoading={isContentsLoading} />
        ) : (
          'Restaurants info is not ready'
        )}
      </div>
    </PageLayout>
  );
};

export default RestaurantsPage;
