import React, { useState, FunctionComponent } from "react";
import { IDataRestaurant, IPropRestaurant } from "../index.d"
import Restaurant from './Restaurant';

const Restaurants: FunctionComponent<{ restaurantsList: IDataRestaurant[], isContentsLoading: boolean }> =
  ({ restaurantsList, isContentsLoading }) => {

    return (
      <div>
        {restaurantsList.map((restaurant: IDataRestaurant, i: number) => {
          const { name, description, delivery_price, blurhash, image } = restaurant;
          const restaurantInfo = { name, description, delivery_price, blurhash, image }
          return (
            <Restaurant
              key={restaurant.name + "_" + i}
              restaurant={restaurantInfo}
              isContentsLoading={isContentsLoading}
            />
          );
        })}
      </div>
    );
  };

export default Restaurants;
