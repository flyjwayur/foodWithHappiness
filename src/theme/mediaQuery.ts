import styled from 'styled-components';

const layoutWidth = 1200;

export const mediaQuerySizes: { [key: string]: string } = {
  phone: '600px',
  tabletPortrait: '900px',
  tabletLandscape: '1200px',
  desktop: '1800px'
};

export const Center = styled.div`
  width: ${layoutWidth}px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${mediaQuerySizes.tabletLandscape}) {
    width: auto;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: ${mediaQuerySizes.phone}) {
    width: auto;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
