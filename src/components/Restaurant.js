import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

const Restaurant = ({restaurant}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <div>{restaurant.name}</div>
      <div>{restaurant.description}</div>
      <div>{restaurant.delivery_price}</div>
      <Blurhash
        style={{ display: isLoading ? "inline-block" : "none" }}
        hash={restaurant.blurhash}
        width={400}
        height={300}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
      <img
        style={{ display: isLoading ? "none" : "inline-block" }}
        src={restaurant.image}
        alt={restaurant.name + "_image"}
        width="400px"
        height="300px"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default Restaurant;
