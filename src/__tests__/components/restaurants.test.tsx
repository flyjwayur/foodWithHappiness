import React from "react";
import { render } from "@testing-library/react";
import Restaurants from "../../components/Restaurants";
import data from "../../data/restaurants.json";

describe("<Restaurant />", () => {
  test("should display all restaurant data", () => {
    const { findByTestId } = render(
      <Restaurants
        restaurantsList={data.restaurants}
        isContentsLoading={true}
      />
    );

    const restaurantsList = findByTestId("restaurants-list");
  });
});
