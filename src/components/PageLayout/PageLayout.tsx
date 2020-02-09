import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';
import GlobalStyle from '../../theme/globalStyle';
import { Center } from '../../theme/mediaQuery';

const PageLayout: FunctionComponent = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Center>{children}</Center>
    </ThemeProvider>
  </>
);

export default PageLayout;
