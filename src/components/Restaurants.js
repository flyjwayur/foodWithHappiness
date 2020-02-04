import React, { useState, useEffect } from "react";
import data from "../data/restaurants.json";
import { sortByName } from "../util/sortArray";
import Restaurant from "./Restaurant";

const Restaurants = () => {
  const [isContentsLoading, setContentsLoading] = useState(true);
  //Arrange restaurants in ascending order initially
  const [ascend, setAscend] = useState(true);
  const [sortedRestaurants, setSortedRestaurants] = useState(
    sortByName(data.restaurants, ascend)
  );

  //Check a content loading status to display a skeleton screen as a placeholder when data is loading
  useEffect(() => {
    setContentsLoading(false);
  }, [sortedRestaurants]);

  return (
    <div>
      <button
        onClick={() => {
          let prevAscend = ascend;
          setAscend(!prevAscend);
          setSortedRestaurants(prevRestaurants =>
            sortByName(prevRestaurants, !prevAscend)
          );
        }}
      >
        <span>Ascending/Descending order</span>
      </button>
      {sortedRestaurants.map((restaurant, i) => {
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
