import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import AccountItem from 'components/atoms/AccountItem/AccountItem';
import { displayModalOn, toggleOptions } from 'actions/toggle';
import Modal from 'components/molecules/Modal/Modal';

const StyledTemplateHeading = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    /* width: 70%; */
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
    position: relative;
  }
`;

const StyledButton = styled(Button)`
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
    position: absolute;
    left: 0;
  }
`;

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

const StyledHeadingText = styled(Heading)`
  font-size: 20px;
  padding-right: 5px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 35px;
    padding-right: 0;
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
  name,
  options,
  toggleAction,
  modalDisplay,
  displayModalOnAction,
}) => {
  return (
    <>
      <StyledTemplateHeading>
        <StyledButton secondary onClick={toggleAction}>
          Options
        </StyledButton>
        <StyledHeadingText>
          {name}{' '}
          <span role="img" aria-label="accessible">
            💸
          </span>
        </StyledHeadingText>
      </StyledTemplateHeading>
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
  const { options, modalDisplay } = toggle;
  return {
    options,
    modalDisplay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAction: () => dispatch(toggleOptions()),
    displayModalOnAction: () => dispatch(displayModalOn()),
  };
};

AccountBoard.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string.isRequired,
  toggleAction: PropTypes.func.isRequired,
  displayModalOnAction: PropTypes.func.isRequired,
  options: PropTypes.bool.isRequired,
  modalDisplay: PropTypes.bool.isRequired,
};

AccountBoard.defaultProps = {
  accounts: [{ accountName: 'Error', valuesAccount: '0' }],
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountBoard);
