import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IDataRestaurant } from '../index.d';
import Restaurant from './Restaurant';

const VenueCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 -0.5em;
  flex-wrap: wrap;

  > div {
    width: calc(33% - 1.065rem);
    margin: 0 0.65rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 950px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    > div {
      width: 100%;
    }
  }
`;

const Restaurants: FunctionComponent<{
  restaurantsList: IDataRestaurant[];
  isContentsLoading: boolean;
}> = ({ restaurantsList, isContentsLoading }) => {
  return (
    <VenueCardContainer>
      {restaurantsList.map((restaurant: IDataRestaurant, i: number) => {
        const {
          name,
          description,
          delivery_price,
          blurhash,
          image,
          tags,
          online,
          currency,
          city
        } = restaurant;
        const restaurantInfo = {
          name,
          description,
          delivery_price,
          blurhash,
          image,
          tags,
          online,
          currency,
          city
        };
        return (
          <Restaurant
            key={restaurant.name + '_' + i}
            restaurant={restaurantInfo}
            isContentsLoading={isContentsLoading}
          />
        );
      })}
    </VenueCardContainer>
  );
};

export default Restaurants;
