import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NameHeading from 'components/molecules/ColumnNameHeading/ColumnNameHeading';
import InputBar from 'components/molecules/InputBar/InputBar';

const StyledWrapper = styled.div`
  width: 90%;
`;

const DashboardInnerTemplate = ({ pageType }) => (
  <StyledWrapper>
    <NameHeading pageType={pageType} />
    <InputBar pageType={pageType} />
  </StyledWrapper>
);

DashboardInnerTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default DashboardInnerTemplate;
