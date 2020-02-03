import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import data from "../data/restaurants.json";
import { sortByName } from "../util/sortArray";

const Restaurants = () => {
  const [ascend, setAscend] = useState(true);
  const [sortedRestaurants, setSortedRestaurants] = useState([]);

  useEffect(() => {
    setSortedRestaurants(sortByName(data.restaurants, ascend));
  }, [ascend]);

  return (
    <div>
      <button onClick={() => setAscend(!ascend)}>
        <span>Ascending/Descending order</span>
      </button>
      {sortedRestaurants.map((restaurant, i) => {
        return (
          <div key={restaurant.name + "_" + i}>
            <div>{restaurant.name}</div>
            <div>{restaurant.description}</div>
            <div>{restaurant.delivery_price}</div>
            <Blurhash
              hash={restaurant.blurhash}
              width={400}
              height={300}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
            <img
              src={restaurant.image}
              alt={restaurant.name + "_image"}
              width="400px"
              height="300px"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Restaurants;
