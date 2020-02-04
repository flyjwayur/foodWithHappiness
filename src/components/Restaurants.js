import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import data from "../data/restaurants.json";
import { sortByName } from "../util/sortArray";

const Restaurants = () => {
  const [ascend, setAscend] = useState(true);
  const [sortedRestaurants, setSortedRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ]);

  useEffect(() => {
    setSortedRestaurants(sortByName(data.restaurants, ascend));
  }, [ascend]);

  const finishLoading = idx => {
    let loadingStatus = [...isLoading];
    loadingStatus[idx] = false;
    setIsLoading(loadingStatus);
  };

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
              style={{ display: isLoading[i] ? "inline-block" : "none" }}
              hash={restaurant.blurhash}
              width={400}
              height={300}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
            <img
              style={{ display: isLoading[i] ? "none" : "inline-block" }}
              src={restaurant.image}
              alt={restaurant.name + "_image"}
              width="400px"
              height="300px"
              onLoad={() => finishLoading(i)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Restaurants;
