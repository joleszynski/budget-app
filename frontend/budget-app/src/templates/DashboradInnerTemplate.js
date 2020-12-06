import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NameHeading from 'components/molecules/ColumnNameHeading/ColumnNameHeading';
import InputBar from 'components/molecules/InputBar/InputBar';
import RowValues from 'components/molecules/RowValues/RowValues';

const StyledWrapper = styled.div`
  width: 90%;
`;

const DashboardInnerTemplate = ({ pageType }) => (
  <StyledWrapper>
    <NameHeading pageType={pageType} />
    <InputBar pageType={pageType} />
    <RowValues />
  </StyledWrapper>
);

DashboardInnerTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default DashboardInnerTemplate;
