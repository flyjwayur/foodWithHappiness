import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { spacing06 } from '../../theme/variables';
import { mediaQuerySizes } from '../../theme/mediaQuery';

const SectionWrapper = styled.div`
  padding: ${spacing06} 0;

  @media (max-width: ${mediaQuerySizes.tabletLandscape}) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: ${mediaQuerySizes.phone}) {
    > div {
      width: 100%;
    }
  }
`;

const Section: FunctionComponent = ({ children }) => <SectionWrapper>{children}</SectionWrapper>;

export default Section;
