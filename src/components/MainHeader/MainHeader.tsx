import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../../theme/theme';
import { mediaQuerySizes } from '../../theme/mediaQuery';
import { spacing02 } from '../../theme/variables';
// import mainHeaderImage from '../../assets/mainImage.png';

const MainHeaderContainer = styled.header`
  position: relative;
  background: 80% 2% / cover no-repeat ${theme.primary};
  max-width: 100%;
  height: 50vh;
  padding: ${spacing02} 0;

  @media (max-width: ${mediaQuerySizes.tabletLandscape}) {
    height: 35vh;
  }

  @media (max-width: ${mediaQuerySizes.phone}) {
    height: 30vh;
  }
`;

const HeaderPosition = styled.div`
  position: absolute;
  top: 50%;
  left: 6%;
  transform: translate(6%, -50%);
  max-width: $spacing-40;

  @media (max-width: ${mediaQuerySizes.tabletLandscape}) {
    top: 65%;
    left: 1%;
  }

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    top: 70%;
    left: 6%;
    transform: translateY(-60%);
    max-width: 20rem;
  }

  @media (max-width: ${mediaQuerySizes.mobile}) {
    top: 65%;
    left: 6%;
    transform: translateY(-60%);
    max-width: 18.75rem;
  }
`;

const Title = styled.div`
  color: ${theme.darkText};
  font-size: 3.5rem;

  @media (max-width: ${mediaQuerySizes.tabletLandscape}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    font-size: 2rem;
  }

  @media (max-width: ${mediaQuerySizes.mobile}) {
    font-size: 1.8rem;
  }
`;

const Description = styled.div`
  color: ${theme.lightText};

  @media (max-width: ${mediaQuerySizes.tabletLandscape}) {
    font-size: 2.5rem;
    line-height: 1.3rem;
  }

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    font-size: 2rem;
    line-height: 1.3rem;
  }

  @media (max-width: ${mediaQuerySizes.mobile}) {
    font-size: 1.8rem;
  }
`;

// const MainImage = styled.div`
//    background-image: url("${mainHeaderImage}");
// `;

const MainHeader: FunctionComponent<{
  titleText: string;
  descriptionText: string;
}> = ({ titleText, descriptionText }) => (
  <MainHeaderContainer title="Happy Food delivery">
    <HeaderPosition>
      <Title>{titleText}</Title>
      <Description>{descriptionText}</Description>
    </HeaderPosition>
    {/* <MainImage /> */}
  </MainHeaderContainer>
);

export default MainHeader;
