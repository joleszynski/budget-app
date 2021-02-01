import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NameHeading from 'components/molecules/ColumnNameHeading/ColumnNameHeading';
import InputBar from 'components/molecules/InputBar/InputBar';
import RowValues from 'components/molecules/RowValues/RowValues';

const StyledWrapper = styled.div`
  width: 100%;
`;

const DashboardInnerTemplate = ({ pageType, data, addAction }) => (
  <StyledWrapper>
    <NameHeading pageType={pageType} />
    <InputBar pageType={pageType} addAction={addAction} />
    <RowValues data={data} />
  </StyledWrapper>
);

DashboardInnerTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  addAction: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DashboardInnerTemplate;
