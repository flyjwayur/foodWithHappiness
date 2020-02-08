import React, { useState, FunctionComponent } from 'react';
import { Blurhash } from 'react-blurhash';
import ContentsLoader from './ContentsLoader';
import { IPropRestaurant } from '../index.d';
import styled from 'styled-components';
import { mediaQuerySizes } from '../theme/mediaQuery';
import theme from '../theme/theme';

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

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    min-width: 20rem;
  }
`;

const RestaurantImage = styled.img`
  border-radius: 8px 8px 0 0;
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
  color: ${theme.greyText};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CardTextDesc = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: #868780;
  margin-top: 2px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CardTextBottom = styled.div`
  border-top: 1px dashed #e4e4e4;
  font-size: 12px;
  color: #868789;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
`;

const DeliveryPrice = styled.span`
  font-size: 0.8rem;
  line-height: 1.3rem;
`;

const Tags = styled.div``;

const Tag = styled.span`
  width: max-content;
  background-color: ${theme.primary};
  color: ${theme.lightText};
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.3rem;
  border-radius: 8px;
  padding: 0.3rem 0.5rem;
  margin: 0.3rem;
`;

const Restaurant: FunctionComponent<{
  restaurant: IPropRestaurant;
  isContentsLoading: boolean;
}> = ({ restaurant, isContentsLoading }) => {
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
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <>
      {isContentsLoading ? (
        <ContentsLoader />
      ) : (
        <Card>
          <Blurhash
            style={{ display: isImageLoading ? 'inline-block' : 'none' }}
            hash={blurhash}
            width={400}
            height={300}
            resolutionX={32}
            resolutionY={32}
            punch={1}
            onLoad={() => console.log('blurhash')}
          />
          <RestaurantImage
            style={{ display: isImageLoading ? 'none' : 'inline-block' }}
            src={image}
            alt={name + '_image'}
            width="400px"
            height="300px"
            onLoad={() => setIsImageLoading(false)}
          />
          <CardTextTop>
            <CardTextTitle>{name}</CardTextTitle>
            <CardTextDesc>{description}</CardTextDesc>
          </CardTextTop>
          <CardTextBottom>
            <DeliveryPrice>{delivery_price} €</DeliveryPrice>
            <Tags>
              {tags.map((tag, i) => (
                <Tag key={tag + i}>{tag}</Tag>
              ))}
            </Tags>
            {/* <span>{online}</span>
            <span>{city}</span> */}
          </CardTextBottom>
        </Card>
      )}
    </>
  );
};

export default Restaurant;
