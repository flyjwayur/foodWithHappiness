import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../../theme/theme';
import { mediaQuerySizes } from '../../theme/mediaQuery';

const SubHeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  border-bottom: 1px solid ${theme.linePrimaryColor};
`;

const Title = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${theme.darkText};
  font-weight: 400;
  margin: 0.5rem;

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    font-size: 1.2rem;
    line-height: 1.7rem;
  }
`;

const SubHeader: FunctionComponent<{
  titleText: string;
}> = ({ titleText }) => (
  <SubHeaderContainer>
    <Title>{titleText}</Title>
  </SubHeaderContainer>
);

export default SubHeader;
