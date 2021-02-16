import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ButtonIconMinus } from 'components/atoms/ButtonIcon/ButtonIcon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledWrapper = styled.div`
  width: 94%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledItem = styled.div`
  width: 15%;
  height: 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.greyColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  font-family: ${({ theme }) => theme.decorativeFonts};
`;

const StyledFill = styled.div`
  width: 6%;
  display: flex;
  align-items: center;
`;

const RowValues = ({ options, data, deleteAction }) => {
  const deleteRecordEvent = (event) => {
    deleteAction(event.target.id);
  };

  return data.map((item) => (
    <Wrapper key={item.id}>
      <StyledWrapper>
        <StyledItem>{item.date}</StyledItem>
        <StyledItem>{item.account}</StyledItem>
        <StyledItem>{item.category}</StyledItem>
        <StyledItem>{item.value}</StyledItem>
      </StyledWrapper>
      <StyledFill>
        {' '}
        {options ? (
          <ButtonIconMinus id={item.id} onClick={(event) => deleteRecordEvent(event)} />
        ) : (
          ''
        )}
      </StyledFill>
    </Wrapper>
  ));
};

RowValues.propTypes = {
  options: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  deleteAction: PropTypes.func.isRequired,
};

RowValues.defaultProps = {
  data: [],
};
const mapStateToProps = ({ toggle }) => {
  const { options } = toggle;
  return {
    options,
  };
};

export default connect(mapStateToProps, null)(RowValues);
