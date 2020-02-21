import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IDataRestaurant } from '../../index.d';
import Restaurant from '../Restaurant/Restaurant';
import { mediaQuerySizes } from '../../theme/mediaQuery';

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

  @media (max-width: ${mediaQuerySizes.tabletLandscape}) {
    justify-content: center;
    > div {
      width: calc(30% - 1.065rem);
    }
  }

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    justify-content: center;
    > div {
      width: calc(28% - 1.065rem);
    }
  }

  @media (max-width: ${mediaQuerySizes.phone}) {
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
    <VenueCardContainer data-testid="restaurant-list">
      {restaurantsList.map((restaurant: IDataRestaurant, i: number) => {
        return (
          <Restaurant
            key={restaurant.name + '_' + i}
            restaurant={restaurant}
            isContentsLoading={isContentsLoading}
          />
        );
      })}
    </VenueCardContainer>
  );
};

export default Restaurants;
