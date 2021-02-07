import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleOptions } from 'actions/toggle';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledTemplateHeading = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
    position: relative;
    width: 60%;
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

const DashboardHeading = ({ name, toggleAction, options }) => (
  <StyledTemplateHeading>
    <StyledButton secondary options={options} onClick={toggleAction}>
      Options
    </StyledButton>
    <StyledHeadingText>
      {name}{' '}
      <span role="img" aria-label="accessible">
        💸
      </span>
    </StyledHeadingText>
  </StyledTemplateHeading>
);

DashboardHeading.propTypes = {
  toggleAction: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAction: () => dispatch(toggleOptions()),
  };
};

const mapStateToProps = ({ toggle }) => {
  const { options } = toggle;
  return {
    options,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeading);
