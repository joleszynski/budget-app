import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import { ButtonIconPlus } from 'components/atoms/ButtonIcon/ButtonIcon';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
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

const StyledItem = styled.div`
  width: 18%;
  height: 30px;
  border-radius: 5px;
  background-color: grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
`;

const StyledButton = styled(ButtonIconPlus)``;

class InputBar extends React.Component {
  state = {
    account: '',
    category: '',
    value: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  clearState = () => {
    this.setState({ account: '', category: '', value: '' });
  };

  render() {
    const { account, category, value } = this.state;
    const { addAction } = this.props;
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const time = new Date().toLocaleDateString('pl-PL', options);

    return (
      <StyledWrapper>
        <StyledInputWrapper>
          <StyledItem type="text" id="date">
            {time}
          </StyledItem>
          <StyledInput onChange={this.handleChange} type="text" id="account" value={account} />
          <StyledInput onChange={this.handleChange} type="text" id="category" value={category} />
          <StyledInput onChange={this.handleChange} type="text" id="value" value={value} />
        </StyledInputWrapper>
        <StyledButton
          onClick={() => {
            addAction(time, account, category, value);
            this.clearState();
          }}
        />
      </StyledWrapper>
    );
  }
}

InputBar.propTypes = {
  addAction: PropTypes.func.isRequired,
};

export default InputBar;
