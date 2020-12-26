import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonIcon from 'components/atoms/ButtonIconMinus/ButtonIconMinus';
import minusIconWhite from 'assets/icons/minusWhite.svg';
import minusIconBlack from 'assets/icons/minusBlack.svg';

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledItem = styled.div`
  width: 18%;
  height: 30px;
  border-radius: 5px;
  background-color: grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
`;

// const dummyData = [
//   {
//     date: '12.05.2020',
//     category: 'Konto Test',
//     purpose: 'Jedzenie',
//     value: '1050,24',
//   },
//   {
//     date: '12.05.2020',
//     category: 'Konto Test 2',
//     purpose: 'Jedzenie',
//     value: '1050,24',
//   },
//   {
//     date: '12.05.2020',
//     category: 'Konto Test 3',
//     purpose: 'Jedzenie',
//     value: '1050,24',
//   },
//   {
//     date: '12.05.2020',
//     category: 'Konto Test 4',
//     purpose: 'Jedzenie',
//     value: '1050,24',
//   },
// ];

const RowValues = ({ options, data }) =>
  data.map((item) => (
    <StyledWrapper>
      <StyledItem>{item.outgoingDate}</StyledItem>
      <StyledItem>{item.outgoingCategoryName}</StyledItem>
      <StyledItem>{item.outgoingPurposeName}</StyledItem>
      <StyledItem>{item.outgoingValue}</StyledItem>
      {options ? <ButtonIcon iconWhite={minusIconWhite} iconBlack={minusIconBlack} /> : ''}
    </StyledWrapper>
  ));

RowValues.propTypes = {
  options: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
};

RowValues.defaultProps = {
  data: [],
};
const mapStateToProps = ({ toggle }) => {
  const { options } = toggle;
  return {
    options,
  };
};

export default connect(mapStateToProps, null)(RowValues);
