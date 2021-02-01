import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ButtonIcon from 'components/atoms/ButtonIconMinus/ButtonIconMinus';
import { deleteAccount } from 'actions/accountBalance';
import minusIconWhite from 'assets/icons/minusWhite.svg';
import minusIconBlack from 'assets/icons/minusBlack.svg';

const Item = styled.div`
  width: 96%;
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

const AccountItem = ({ id, accountName, accountValue, options, deleteAccountAction }) => {
  const deleteAccountEvent = (event) => {
    deleteAccountAction(event.target.id);
  };

  return (
    <Item id={id}>
      <LeftSideItem>{accountName}</LeftSideItem>
      <RightSideItem>
        {accountValue}
        {options ? (
          <ButtonIcon
            id={id}
            value={accountName}
            onClick={(event) => deleteAccountEvent(event)}
            iconWhite={minusIconWhite}
            iconBlack={minusIconBlack}
          />
        ) : (
          ''
        )}
      </RightSideItem>
    </Item>
  );
};

AccountItem.propTypes = {
  id: PropTypes.string.isRequired,
  accountName: PropTypes.string.isRequired,
  accountValue: PropTypes.string.isRequired,
  options: PropTypes.bool.isRequired,
  deleteAccountAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({ toggle }) => {
  const { options } = toggle;
  return {
    options,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAccountAction: (id) => dispatch(deleteAccount(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountItem);
