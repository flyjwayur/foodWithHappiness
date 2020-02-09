/// <reference path='../../index.d.ts'/>
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../../theme/theme';
import { mediaQuerySizes } from '../../theme/mediaQuery';
// @ts-ignore
import sortIcon from '../../assets/sortIcon.png';

const MainButton = styled.button`
  width: max-content;
  text-align: center;
  padding: 1rem 1.8rem;
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
  display: flex;
  align-items: center;
  transition: all ease-in-out 0.5s;

  @media (max-width: ${mediaQuerySizes.tabletPortrait}) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: ${mediaQuerySizes.phone}) {
    font-size: 1rem;
  }

  &:hover {
    background-color: ${theme.lightPrimary};
  }
`;

const SortButtonIcon = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  padding-right: 0.8rem;
`;

const Button: FunctionComponent<{
  label: string;
  onClickFn: () => void;
}> = ({ label, onClickFn }) => {
  return (
    <MainButton onClick={onClickFn}>
      <SortButtonIcon src={sortIcon} />
      {label}
    </MainButton>
  );
};

export default Button;
