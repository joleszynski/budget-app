import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border: 2px solid ${({ theme }) => theme.mainColor};

  &:hover {
    background-color: ${({ theme }) => theme.mainColor};
  }
`;

const HorizontalLine = styled.div`
  position: absolute;
  width: 8px;
  height: 2px;
  background-color: ${({ theme }) => theme.mainColor};
  ${Border}:hover & {
    background-color: ${({ theme }) => theme.whiteColor};
  }
`;

const VerticalLine = styled.div`
  position: absolute;
  width: 2px;
  height: 8px;
  background-color: ${({ theme }) => theme.mainColor};
  ${Border}:hover & {
    background-color: ${({ theme }) => theme.whiteColor};
  }
`;

export const ButtonIconMinus = () => (
  <Border>
    <HorizontalLine />
  </Border>
);

export const ButtonIconPlus = () => (
  <Border>
    <HorizontalLine />
    <VerticalLine />
  </Border>
);
