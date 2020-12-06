import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIconMinus/ButtonIconMinus';
import plusIconWhite from 'assets/icons/plusWhite.svg';
import plusIconBlack from 'assets/icons/plusBlack.svg';

const StyledWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledInput = styled(Input)`
  width: 18%;
  height: 30px;
  font-size: 14px;

  &:focus-visible {
    font-family: 'Montserrat';
    font-size: 14px;
  }
`;

const InputBar = () => (
  <StyledWrapper>
    <StyledInput />
    <StyledInput />
    <StyledInput />
    <StyledInput />
    <ButtonIcon iconWhite={plusIconWhite} iconBlack={plusIconBlack} />
  </StyledWrapper>
);

export default InputBar;
