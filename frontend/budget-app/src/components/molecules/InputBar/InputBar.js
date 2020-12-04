import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';

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
`;

const InputBar = () => (
  <StyledWrapper>
    <StyledInput />
    <StyledInput />
    <StyledInput />
    <StyledInput />
  </StyledWrapper>
);

export default InputBar;
