import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { addAccount } from 'actions/accountBalance';
import { displayModalOff } from 'actions/toggle';

const StyledWrapper = styled.div`
  display: ${({ modalDisplay }) => (modalDisplay ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
`;

const StyledModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  width: 800px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
`;

const StyledInnerModal = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

class Modal extends React.Component {
  state = {
    name: '',
    value: 0,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  render() {
    const { modalDisplay, displayModalOffAction, addAccountAction } = this.props;
    const { name, value } = this.state;

    return (
      <StyledWrapper modalDisplay={modalDisplay}>
        <StyledModalWrapper>
          <StyledModal>
            <StyledInnerModal>
              <Input
                onChange={this.handleChange}
                id="name"
                placeholder="Name"
                type="text"
                value={name}
              />
              <Input
                onChange={this.handleChange}
                id="value"
                placeholder="Value"
                type="text"
                value={value}
              />
              <Button
                onClick={() => addAccountAction(name, parseFloat(value), displayModalOffAction())}
              >
                Add
              </Button>
              <Button onClick={displayModalOffAction}>CANCEL</Button>
            </StyledInnerModal>
          </StyledModal>
        </StyledModalWrapper>
      </StyledWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayModalOffAction: () => dispatch(displayModalOff()),
    addAccountAction: (accountName, accountValue) =>
      dispatch(addAccount(accountName, accountValue)),
  };
};

Modal.propTypes = {
  modalDisplay: PropTypes.bool.isRequired,
  displayModalOffAction: PropTypes.func.isRequired,
  addAccountAction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Modal);
