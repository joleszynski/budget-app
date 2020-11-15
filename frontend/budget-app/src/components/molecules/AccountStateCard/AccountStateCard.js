import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AccountItem from 'components/atoms/AccountItem/AccountItem';
// import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.primarBlack};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const AccountStateCard = ({ accounts }) => (
  <StyledWrapper>
    {accounts.map(({ id, nameAccount, valuesAccount }) => (
      <AccountItem id={id} nameAccount={nameAccount} valuesAccount={valuesAccount} />
    ))}
  </StyledWrapper>
);

AccountStateCard.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object),
};

AccountStateCard.defaultProps = {
  accounts: [{ accountName: 'Error', valuesAccount: '0' }],
};

export default AccountStateCard;
