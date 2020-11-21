import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { displayModalOff } from 'actions';

const StyledWrapper = styled.div`
  position: fixed;
  top: 250px;
  left: 300px;
  width: 300px;
  height: 300px;
  background-color: grey;
  display: ${({ modalDisplay }) => (modalDisplay ? 'block' : 'none')};
`;

class Modal extends React.Component {
  state = {
    accountName: '',
    accountValue: 0,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  render() {
    const { modalDisplay, displayModalOffAction } = this.props;
    const { accountName, accountValue } = this.state;

    return (
      <StyledWrapper modalDisplay={modalDisplay}>
        <Input
          onChange={this.handleChange}
          id="accountName"
          placeholder="Name"
          type="text"
          value={accountName}
        />
        <Input
          onChange={this.handleChange}
          id="accountValue"
          placeholder="Value"
          type="text"
          value={accountValue}
        />
        <Button>Add</Button>
        <Button onClick={displayModalOffAction}>CANCEL</Button>
      </StyledWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayModalOffAction: () => dispatch(displayModalOff()),
  };
};

Modal.propTypes = {
  modalDisplay: PropTypes.bool.isRequired,
  displayModalOffAction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Modal);
