import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AccountItem from 'components/atoms/AccountItem/AccountItem';

const StyledItemsWrapper = styled.div`
  margin-top: 10px;
  border: 2px solid ${({ theme }) => theme.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AccountBoard = ({ accounts }) => {
  return (
    <>
      <StyledItemsWrapper>
        {accounts.map(({ accountName, accountValue }, i) => (
          <AccountItem id={parseInt(i, 10)} accountName={accountName} accountValue={accountValue} />
        ))}
      </StyledItemsWrapper>
    </>
  );
};

AccountBoard.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object),
};

AccountBoard.defaultProps = {
  accounts: [{ accountName: 'Error', valuesAccount: '0' }],
};

export default AccountBoard;
