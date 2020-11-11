import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const Item = styled.div`
  width: 100%;
  height: 35px;
  border-bottom: 1px solid ${({ theme }) => theme.primaryBlack};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const LeftSideItem = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RightSideItem = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const AccountItem = ({ nameAccount, valuesAccount }) => (
  <Item>
    <LeftSideItem>{nameAccount}</LeftSideItem>
    <RightSideItem>{valuesAccount}</RightSideItem>
    <Button option>Usuń</Button>
  </Item>
);

AccountItem.propTypes = {
  nameAccount: PropTypes.string.isRequired,
  valuesAccount: PropTypes.number.isRequired,
};

export default AccountItem;
