import React, { useState, useEffect, FunctionComponent } from "react";
import data from "../data/restaurants.json";
import { sortByName, sortByName2 } from "../util/sortArray";
import Restaurants from "../components/Restaurants"
import { IDataRestaurant } from "../index.d"


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
    <div>
      <button
        onClick={() => {
          const prevAscend = ascend;
          setAscend(!prevAscend);
          setSortedRestaurants((prevRestaurants: IDataRestaurant[]) =>
            sortByName(prevRestaurants as IDataRestaurant[], !prevAscend)
          );
        }}
      >
        <span>Ascending/Descending order</span>
      </button>
      <div data-testid="restaurants-list">
        {sortedRestaurants.length ?
          <Restaurants
            restaurantsList={sortedRestaurants}
            isContentsLoading={isContentsLoading} />
          : "Restaurants info is not ready"}
      </div>
    </div>
  );
};

export default RestaurantsPage;

