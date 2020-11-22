import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.whiteColor};
  margin-left: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBlack};
  }
`;

export default ButtonIcon;
