import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainHeading from 'components/atoms/MainHeading/MainHeading';
import AccountItem from 'components/atoms/ListItem/ListItem';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  width: 75%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.primarBlack};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const StyledHeadingWrapper = styled.div`
  width: 90%;
  margin-top: 5px;
  border-bottom: 2px solid ${({ theme }) => theme.primarBlack};
`;

const StyledAccountsWrapper = styled.div`
  width: 90%;
`;

const AccountStateCard = ({ accounts }) => (
  <StyledWrapper>
    <StyledHeadingWrapper>
      <Button option>Option</Button>
      <MainHeading secondary center>
        Stan Kont
      </MainHeading>
    </StyledHeadingWrapper>
    <StyledAccountsWrapper>
      {accounts.map(({ nameAccount, valuesAccount }) => (
        <AccountItem nameAccount={nameAccount} valuesAccount={valuesAccount} />
      ))}
    </StyledAccountsWrapper>
    <Button>Dodaj</Button>
  </StyledWrapper>
);

AccountStateCard.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object),
};

AccountStateCard.defaultProps = {
  accounts: [{ accountName: 'Error', valuesAccount: '0' }],
};

export default AccountStateCard;
