/// <reference path='../index.d.ts'/>
import React, { useState, useEffect, FunctionComponent } from 'react';
import data from '../data/restaurants.json';
import { sortByName } from '../util/sortArray';
import Restaurants from '../components/Restaurants/Restaurants';
import { IDataRestaurant } from '../index.d';
import PageLayout from '../components/PageLayout/PageLayout';
import Button from '../components/Button/Button';
import MainHeader from '../components/MainHeader/MainHeader';
// @ts-ignore
import image from './../assets/fruitImage.png';
/* Requiring non JS or TS resources is currently not supported 
by the TypeScript server which powers VS Code's JavaScript and TypeScript intellisense. 
Here's the issue tracking this: https://github.com/Microsoft/TypeScript/issues/15146 */

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

  return (
    <PageLayout>
      <MainHeader
        titleText="Looking for a good weekend meal?"
        descriptionText="Happy food delivery and great experience"
        backgroundUrl={image}
      />
      <Button
        label="Ascending/Descending order"
        onClickFn={() => {
          const prevAscend = ascend;
          setAscend(!prevAscend);
          setSortedRestaurants((prevRestaurants: IDataRestaurant[]) =>
            sortByName(prevRestaurants as IDataRestaurant[], !prevAscend)
          );
        }}
      />
      <div data-testid="restaurants-list">
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
