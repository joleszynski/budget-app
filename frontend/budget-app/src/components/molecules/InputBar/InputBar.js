import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import { ButtonIconPlus } from 'components/atoms/ButtonIcon/ButtonIcon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledWrapper = styled.div`
  margin: 10px 0 10px 0;
  width: 94%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledInput = styled(Input)`
  width: 15%;
  height: 30px;
  font-size: 12px;

  &:focus-visible {
    font-family: 'Montserrat';
    font-size: 14px;
  }
`;

const StyledItem = styled.div`
  width: 15%;
  height: 30px;
  border-radius: 5px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const StyledButton = styled(ButtonIconPlus)``;

const StyledFill = styled.div`
  width: 6%;
  display: flex;
  align-items: center;
`;

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
      <Wrapper>
        <StyledWrapper>
          <StyledItem type="text" id="date">
            {time}
          </StyledItem>
          <StyledInput onChange={this.handleChange} type="text" id="account" value={account} />
          <StyledInput onChange={this.handleChange} type="text" id="category" value={category} />
          <StyledInput onChange={this.handleChange} type="text" id="value" value={value} />
        </StyledWrapper>
        <StyledFill>
          {' '}
          <StyledButton
            onClick={() => {
              addAction(time, account, category, value);
              this.clearState();
            }}
          />
        </StyledFill>
      </Wrapper>
    );
  }
}

InputBar.propTypes = {
  addAction: PropTypes.func.isRequired,
};

export default InputBar;
