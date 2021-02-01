import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIconMinus/ButtonIconMinus';
import plusIconWhite from 'assets/icons/plusWhite.svg';
import plusIconBlack from 'assets/icons/plusBlack.svg';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInputWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledInput = styled(Input)`
  width: 18%;
  height: 30px;
  font-size: 14px;

  &:focus-visible {
    font-family: 'Montserrat';
    font-size: 14px;
  }
`;

const StyledButton = styled(ButtonIcon)`
  margin-right: 20px;
`;

class InputBar extends React.Component {
  state = {
    date: '',
    account: '',
    category: '',
    value: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  render() {
    const { date, account, category, value } = this.state;
    const { addAction } = this.props;

    return (
      <StyledWrapper>
        <StyledInputWrapper>
          <StyledInput onChange={this.handleChange} type="text" id="date" value={date} />
          <StyledInput onChange={this.handleChange} type="text" id="account" value={account} />
          <StyledInput onChange={this.handleChange} type="text" id="category" value={category} />
          <StyledInput onChange={this.handleChange} type="text" id="value" value={value} />
        </StyledInputWrapper>
        <StyledButton
          iconWhite={plusIconWhite}
          iconBlack={plusIconBlack}
          onClick={() => addAction(date, account, category, value)}
        />
      </StyledWrapper>
    );
  }
}

InputBar.propTypes = {
  addAction: PropTypes.func.isRequired,
};

export default InputBar;
