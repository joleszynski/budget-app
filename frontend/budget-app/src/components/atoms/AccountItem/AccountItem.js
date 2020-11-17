import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const Item = styled.div`
  width: 90%;
  height: 65px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.mainColor};
  display: flex;
  flex-direction: row;

  color: ${({ id }) => (id % 2 ? 'gray' : 'black')};

  &:first-child {
    margin-top: 20px;
  }

  &:last-child {
    margin-bottom: 20px;
  }
`;

const LeftSideItem = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
`;

const RightSideItem = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
`;

const AccountItem = ({ id, nameAccount, valuesAccount, options }) => (
  <Item id={id}>
    <LeftSideItem>{nameAccount}</LeftSideItem>
    <RightSideItem>
      {valuesAccount}
      {options ? <ButtonIcon>-</ButtonIcon> : ''}
    </RightSideItem>
  </Item>
);

AccountItem.propTypes = {
  nameAccount: PropTypes.string.isRequired,
  valuesAccount: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  options: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ toggle }) => {
  const { options } = toggle;
  return {
    options,
  };
};

export default connect(mapStateToProps, null)(AccountItem);
