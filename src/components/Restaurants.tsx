import React, { useState, useEffect, FunctionComponent } from "react";
import data from "../data/restaurants.json";
import { sortByName } from "../util/sortArray";
import Restaurant from "./Restaurant";
import { IDataRestaurant } from "../index.d"


const Restaurants: FunctionComponent = () => {
  const [isContentsLoading, setContentsLoading] = useState(true);
  // Arrange restaurants in ascending order initially
  const [ascend, setAscend] = useState(true);
  const [sortedRestaurants, setSortedRestaurants] = useState(
    sortByName(data.restaurants, ascend)
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
      {sortedRestaurants.map((restaurant: IDataRestaurant, i: number) => {
        return (
          <Restaurant
            key={restaurant.name + "_" + i}
            restaurant={restaurant}
            isContentsLoading={isContentsLoading}
          />
        );
      })}
    </div>
  );
};

export default Restaurants;
