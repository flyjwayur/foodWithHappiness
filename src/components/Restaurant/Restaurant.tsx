import React, { useState, FunctionComponent } from 'react';
import Blurhash from '../Blurhash/Blurhash';
import ContentsLoader from '../ContentsLoader/ContentsLoader';
import { IPropRestaurant } from '../../index.d';
import styled from 'styled-components';
import { mediaQuerySizes } from '../../theme/mediaQuery';
import theme from '../../theme/theme';
import { formatCurrency } from '../../util/formatCurrency';
// @ts-ignore
import deliveryIcon from '../../assets/deliveryIcon.png';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20rem;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px #aaa;

  > img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
  }

  @media (max-width: ${mediaQuerySizes.tabletLandscape}) {
    min-width: 16rem;
  }

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    min-width: 15rem;
  }

  @media (max-width: ${mediaQuerySizes.phone}) {
    min-width: 14rem;
  }
`;

const RestaurantImage = styled.img`
  border-radius: 8px 8px 0 0;
  width: 100%;
`;

const CardTextTop = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  padding: 0.875rem 1rem;
  padding-bottom: 1rem;
  background-color: ${theme.lightGreyBackground};
`;

const CardTextTitle = styled.div`
  font-weight: 500;
  font-size: 1.125rem;
  color: ${theme.darkgreyText};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    font-size: 1rem;
  }
`;

const CardTextDesc = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: #868780;
  margin-top: 2px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    font-size: 0.95rem;
  }
`;

const CardTextBottom = styled.div`
  border-top: 1px dashed ${theme.linePrimaryColor};
  font-size: 1rem;
  color: ${theme.lightgreyText};
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    font-size: 0.95rem;
  }
`;

const Delivery = styled.div`
  font-size: 0.73rem;
  line-height: 0.9rem;
  display: flex;
  align-items: center;
`;

const DeliveryIcon = styled.img`
  width: 0.9rem;
  height: 0.9rem;
  padding-right: 0.3rem;
`;

const DeliveryPrice = styled.span``;

const Tags = styled.div``;

const Tag = styled.span`
  width: max-content;
  background-color: ${theme.primary};
  color: ${theme.lightText};
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.3rem;
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  margin: 0.3rem;

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    padding: 0.3rem;
    margin: 0.1rem;
  }
`;

const Restaurant: FunctionComponent<{
  restaurant: IPropRestaurant;
  isContentsLoading: boolean;
}> = ({ restaurant, isContentsLoading }) => {
  const { name, description, delivery_price, blurhash, image, tags } = restaurant;
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <>
      {isContentsLoading ? (
        <ContentsLoader />
      ) : (
        <Card data-testid="restaurant">
          <Blurhash
            style={{ display: isImageLoading ? 'inline-block' : 'none' }}
            hash={blurhash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
          <RestaurantImage
            style={{ display: isImageLoading ? 'none' : 'inline-block' }}
            src={image}
            alt={name + '_image'}
            onLoad={() => setIsImageLoading(false)}
          />
          <CardTextTop>
            <CardTextTitle>{name}</CardTextTitle>
            <CardTextDesc>{description}</CardTextDesc>
          </CardTextTop>
          <CardTextBottom>
            <Delivery>
              <DeliveryIcon src={deliveryIcon} alt="delivery icon" />
              <DeliveryPrice>{formatCurrency(delivery_price)} €</DeliveryPrice>
            </Delivery>
            <Tags>
              {tags.map((tag, i) => (tag.length < 14 ? <Tag key={tag + i}>{tag}</Tag> : null))}
            </Tags>
          </CardTextBottom>
        </Card>
      )}
    </>
  );
};

export default Restaurant;
