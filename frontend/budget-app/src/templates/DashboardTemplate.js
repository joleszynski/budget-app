import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'components/molecules/Modal/Modal';
import DownButtonsBar from 'components/molecules/DownButtonsBar/DownButtonsBar';
import DashboardHeading from 'components/molecules/DashboardHeading/DashboardHeading';
import MainFooter from 'components/molecules/MainFooter/MainFooter';

const StyledWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
`;

const StyledItemsWrapper = styled.div`
  width: 90%;
  margin: 10px auto 0 auto;
  border: 2px solid ${({ theme }) => theme.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;

const DashboardTemplate = ({ children, modalDisplay, name }) => (
  <>
    <StyledWrapper>
      <DashboardHeading name={name} />
      <StyledItemsWrapper>{children}</StyledItemsWrapper>
      <DownButtonsBar />
      <MainFooter />
    </StyledWrapper>
    <Modal modalDisplay={modalDisplay} />
  </>
);

DashboardTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  modalDisplay: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = ({ toggle }) => {
  const { modalDisplay } = toggle;
  return {
    modalDisplay,
  };
};

export default connect(mapStateToProps, null)(DashboardTemplate);
