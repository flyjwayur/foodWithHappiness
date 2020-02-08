import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../../theme/theme';
import { mediaQuerySizes } from '../../theme/mediaQuery';

const MainButton = styled.button`
  margin: 0;
  width: max-content;
  text-align: center;
  padding: 0.5rem 1.8rem;
  font-size: 1.2rem;
  letter-spacing: 2px;
  border: 2px solid ${theme.secondary};
  color: ${theme.lightText};
  background-color: ${theme.primary};
  border-radius: 5px;
  font-weight: 700;
  box-shadow: 0 0 8px 0 rgba(32, 33, 37, 0.12);
  cursor: pointer;
  transition: all 0.2s;

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    width: 10rem;
    font-size: 1rem;
  }

  &:hover {
    background-color: ${theme.background};
    color: ${theme.primary};
    border: 2px solid ${theme.lightText};
  }
`;

const Button: FunctionComponent<{
  label: string;
  onClickFn: () => void;
}> = ({ label, onClickFn }) => {
  return <MainButton onClick={onClickFn}>{label}</MainButton>;
};

export default Button;
