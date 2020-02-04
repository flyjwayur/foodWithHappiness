import React, { useState } from "react";
import { Blurhash } from "react-blurhash";
import ContentsLoader from "./ContentsLoader";

const Restaurant = ({ restaurant, isContentsLoading }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div>
      {isContentsLoading ? (
        <ContentsLoader />
      ) : (
        <div>
          <div>{restaurant.name}</div>
          <div>{restaurant.description}</div>
          <div>{restaurant.delivery_price}</div>
          <Blurhash
            style={{ display: isImageLoading ? "inline-block" : "none" }}
            hash={restaurant.blurhash}
            width={400}
            height={300}
            resolutionX={32}
            resolutionY={32}
            punch={1}
            onLoad={() => console.log("blurhash")}
          />
          <img
            style={{ display: isImageLoading ? "none" : "inline-block" }}
            src={restaurant.image}
            alt={restaurant.name + "_image"}
            width="400px"
            height="300px"
            onLoad={() => setIsImageLoading(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Restaurant;
