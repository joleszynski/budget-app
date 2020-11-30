import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import AccountItem from 'components/atoms/AccountItem/AccountItem';
import { displayModalOn } from 'actions/toggle';
import Modal from 'components/molecules/Modal/Modal';

const StyledAddButton = styled(Button)`
  width: 100px;
  height: 25px;
  font-size: 15px;

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 28px;
    font-size: 17px;
  }

  @media screen and (min-width: 1024px) {
    width: 150px;
    height: 35px;
    font-size: 23px;
  }
`;

const StyledItemsWrapper = styled.div`
  margin-top: 10px;
  border: 2px solid ${({ theme }) => theme.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAddButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 0 0;
`;

const AccountBoard = ({
  accounts,

  options,
  modalDisplay,
  displayModalOnAction,
}) => {
  return (
    <>
      <StyledItemsWrapper>
        {accounts.map(({ accountName, accountValue }, i) => (
          <AccountItem id={parseInt(i, 10)} accountName={accountName} accountValue={accountValue} />
        ))}
        <StyledAddButtonWrapper>
          {options ? (
            <StyledAddButton onClick={displayModalOnAction} secondary>
              Add account
            </StyledAddButton>
          ) : (
            ''
          )}
        </StyledAddButtonWrapper>
      </StyledItemsWrapper>
      <Modal modalDisplay={modalDisplay} />
    </>
  );
};

const mapStateToProps = ({ toggle }) => {
  const { modalDisplay, options } = toggle;
  return {
    modalDisplay,
    options,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayModalOnAction: () => dispatch(displayModalOn()),
  };
};

AccountBoard.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object),
  displayModalOnAction: PropTypes.func.isRequired,
  modalDisplay: PropTypes.bool.isRequired,
  options: PropTypes.bool.isRequired,
};

AccountBoard.defaultProps = {
  accounts: [{ accountName: 'Error', valuesAccount: '0' }],
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountBoard);
