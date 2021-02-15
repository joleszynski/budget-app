import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

const pageNameValue = {
  outgoings: ['Date', 'Account', 'Category', 'Value'],
  transfers: ['Date', 'From', 'To', 'Value'],
  income: ['Date', 'Account', 'Category', 'Value'],
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledWrapper = styled.div`
  width: 94%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledBox = styled.div`
  width: 14%;
  height: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.greyColor};
`;

const StyledHeading = styled(Heading)`
  font-size: 20px;
`;

const StyledFill = styled.div`
  width: 6%;
`;

const NameHeading = ({ pageType }) => (
  <Wrapper>
    <StyledWrapper>
      {pageNameValue[pageType].map((name, i) => (
        <StyledBox key={String(i)}>
          <StyledHeading>{name}</StyledHeading>
        </StyledBox>
      ))}
    </StyledWrapper>
    <StyledFill />
  </Wrapper>
);

NameHeading.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default NameHeading;
