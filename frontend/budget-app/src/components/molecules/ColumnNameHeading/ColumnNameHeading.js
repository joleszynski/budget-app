import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

const pageNameValue = {
  outgoings: ['Date', 'Account', 'Category', 'Value'],
  transfers: ['Date', 'From', 'To', 'Value'],
  income: ['Date', 'Account', 'Category', 'Value'],
};

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledBox = styled.div`
  width: 12%;
  height: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.greyColor};
`;

const StyledHeading = styled(Heading)`
  font-size: 20px;
`;

const NameHeading = ({ pageType }) => (
  <StyledWrapper>
    {pageNameValue[pageType].map((name, i) => (
      <StyledBox key={String(i)}>
        <StyledHeading>{name}</StyledHeading>
      </StyledBox>
    ))}
  </StyledWrapper>
);

NameHeading.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default NameHeading;
