import React, { useState, FunctionComponent } from 'react';
import { Blurhash } from 'react-blurhash';
import ContentsLoader from './ContentsLoader';
import { IPropRestaurant } from '../index.d';

const Restaurant: FunctionComponent<{
  restaurant: IPropRestaurant;
  isContentsLoading: boolean;
}> = ({ restaurant, isContentsLoading }) => {
  const { name, description, delivery_price, blurhash, image } = restaurant;
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <>
      {isContentsLoading ? (
        <ContentsLoader />
      ) : (
        <div>
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
          <img
            style={{ display: isImageLoading ? 'none' : 'inline-block' }}
            src={image}
            alt={name + '_image'}
            width="400px"
            height="300px"
            onLoad={() => setIsImageLoading(false)}
          />
          <div>
            <div>{name}</div>
            <div>{description}</div>
          </div>
          <div>{delivery_price}</div>
        </div>
      )}
    </>
  );
};

export default Restaurant;
