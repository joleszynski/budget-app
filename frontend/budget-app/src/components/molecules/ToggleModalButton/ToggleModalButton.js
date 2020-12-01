import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import { displayModalOn } from 'actions/toggle';

const StyledAddButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 0 0;
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

const ToggleModalButton = ({ options, displayModalOnAction }) => (
  <StyledAddButtonWrapper>
    {options ? (
      <StyledAddButton onClick={displayModalOnAction} secondary="true">
        Add account
      </StyledAddButton>
    ) : (
      ''
    )}
  </StyledAddButtonWrapper>
);

ToggleModalButton.propTypes = {
  displayModalOnAction: PropTypes.func.isRequired,
  options: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ toggle }) => {
  const { options } = toggle;
  return {
    options,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayModalOnAction: () => dispatch(displayModalOn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleModalButton);
