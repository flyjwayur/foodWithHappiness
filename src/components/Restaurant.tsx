import React, { useState, FunctionComponent } from "react";
import { Blurhash } from "react-blurhash";
import ContentsLoader from "./ContentsLoader";

interface IPropRestaurant {
  name: string,
  description: string,
  delivery_price: number,
  blurhash: string,
  image: string,
}

const Restaurant: FunctionComponent<{ restaurant: IPropRestaurant, isContentsLoading: boolean }> =
  ({ restaurant, isContentsLoading }) => {
    const { name, description, delivery_price, blurhash, image } = restaurant;
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
      <div>
        {isContentsLoading ? (
          <ContentsLoader />
        ) : (
            <div>
              <div>{name}</div>
              <div>{description}</div>
              <div>{delivery_price}</div>
              <Blurhash
                style={{ display: isImageLoading ? "inline-block" : "none" }}
                hash={blurhash}
                width={400}
                height={300}
                resolutionX={32}
                resolutionY={32}
                punch={1}
                onLoad={() => console.log("blurhash")}
              />
              <img
                style={{ display: isImageLoading ? "none" : "inline-block" }}
                src={image}
                alt={name + "_image"}
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