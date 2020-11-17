import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import AccountItem from 'components/atoms/AccountItem/AccountItem';
import { toggleOptions } from 'actions';

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

class AccountBoard extends React.Component {
  /* eslint-disable react/no-unused-state */
  state = {
    options: false,
  };

  render() {
    const { accounts, name, options, toggleAction } = this.props;
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
          {accounts.map(({ id, nameAccount, valuesAccount }) => (
            <AccountItem id={id} nameAccount={nameAccount} valuesAccount={valuesAccount} />
          ))}
          <StyledAddButtonWrapper>
            {options ? <StyledButton secondary>Add account</StyledButton> : ''}
          </StyledAddButtonWrapper>
        </StyledItemsWrapper>
      </>
    );
  }
}

const mapStateToProps = ({ toggle }) => {
  const { options } = toggle;
  return {
    options,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAction: () => dispatch(toggleOptions()),
  };
};

AccountBoard.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string.isRequired,
  toggleAction: PropTypes.func.isRequired,
  options: PropTypes.bool.isRequired,
};

AccountBoard.defaultProps = {
  accounts: [{ accountName: 'Error', valuesAccount: '0' }],
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountBoard);
