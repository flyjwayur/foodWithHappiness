import React from "react";
import { Blurhash } from "react-blurhash";
import data from "../data/restaurants.json";

const Restaurant = () => (
    <div>
      {data.restaurants.map((restaurant, i) => {
        return (
          <div key={i}>
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
            <img src={restaurant.image} alt={restaurant.name + "_image"} />
          </div>
        );
      })}
    </div>
  );

export default Restaurant;
