import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../../theme/theme';
import { mediaQuerySizes } from '../../theme/mediaQuery';

console.log('media', mediaQuerySizes);

const MainHeaderContainer = styled.header`
  background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);
  height: 30rem;
  min-height: calc(50vh - 40px);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2rem;

  @media (max-width: ${mediaQuerySizes.tabletLandscape}) {
    height: 25rem;
    min-height: calc(40vh - 40px);
  }

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    height: 20rem;
    min-height: calc(35vh - 40px);
  }

  @media (max-width: ${mediaQuerySizes.phone}) {
    height: 18rem;
    min-height: calc(30vh - 40px);
  }
`;

const MainHeaderInnerContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 2rem;
`;

const HeaderLeft = styled.div`
  flex: 1 2 50%;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  height: 8rem;
`;

const Title = styled.div`
  font-size: 3rem;
  line-height: 3.75rem;
  font-weight: 900;
  letter-spacing: -1px;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-bottom: 1.5rem;

  @media (max-width: ${mediaQuerySizes.tabletLandscape}) {
    font-size: 2.8rem;
    line-height: 3.2rem;
  }

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    font-size: 2.2rem;
    line-height: 2.8rem;
  }

  @media (max-width: ${mediaQuerySizes.phone}) {
    font-size: 2rem;
    line-height: 2.3rem;
  }
`;

const Description = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${theme.lightgreyText};
  white-space: pre-wrap;
  font-weight: 300;
  font-style: oblique;

  @media (max-width: ${mediaQuerySizes.tabletLandscape}) {
    font-size: 1.3rem;
    line-height: 1.35rem;
  }

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    font-size: 1rem;
    line-height: 1.3rem;
  }

  @media (max-width: ${mediaQuerySizes.phone}) {
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;

const HeaderRight = styled.div`
  position: relative;
  flex: 1 2 50%;
  min-width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 5px;

  @media (max-width: ${mediaQuerySizes.phone}) {
    display: none;
  }
`;

const MainImage = styled.img`
  position: absolute;
  max-height: 100%;
  width: 100%;
  object-fit: cover;
`;

const MainHeader: FunctionComponent<{
  titleText: string;
  descriptionText: string;
  backgroundUrl: string;
}> = ({ titleText, descriptionText, backgroundUrl }) => (
  <MainHeaderContainer title="Happy Food delivery">
    <MainHeaderInnerContainer>
      <HeaderLeft>
        <HeaderText>
          <Title>{titleText}</Title>
          <Description>{descriptionText}</Description>
        </HeaderText>
      </HeaderLeft>
      <HeaderRight>
        <MainImage src={backgroundUrl} alt="main header food image" />
      </HeaderRight>
    </MainHeaderInnerContainer>
  </MainHeaderContainer>
);

export default MainHeader;
