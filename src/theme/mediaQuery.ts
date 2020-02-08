import styled from 'styled-components';

const layoutWidth = 1200;

export const mediaQuerySizes: { [key: string]: number } = {
  phone: 600,
  tabletPortrait: 900,
  tabletLandscape: 1200,
  desktop: 1800
};

export const Center = styled.div`
  width: ${layoutWidth}px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${mediaQuerySizes.tabletLandscape}px) {
    width: auto;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media (max-width: ${mediaQuerySizes.tabletPortrait}px) {
    width: auto;
    margin-left: 8px;
    margin-right: 8px;
  }
`;
