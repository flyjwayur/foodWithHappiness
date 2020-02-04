import React, { useState } from "react";
import data from "../data/restaurants.json";
import { sortByName } from "../util/sortArray";
import Restaurant from "./Restaurant";

const Restaurants = () => {
  const [ascend, setAscend] = useState(true);
  //Arrange restaurants in ascending order initially
  const [sortedRestaurants, setSortedRestaurants] = useState(
    sortByName(data.restaurants, ascend)
  );

  return (
    <div>
      <button
        onClick={() => {
          setAscend(!ascend);
          setSortedRestaurants(sortByName(data.restaurants, ascend));
        }}
      >
        <span>Ascending/Descending order</span>
      </button>
      {sortedRestaurants.map((restaurant, i) => {
        return (
          <Restaurant key={restaurant.name + "_" + i} restaurant={restaurant} />
        );
      })}
    </div>
  );
};

export default Restaurants;
