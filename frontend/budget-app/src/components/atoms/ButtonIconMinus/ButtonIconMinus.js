import styled from 'styled-components';

const ButtonIcon = styled.button`
  border: 2px solid ${({ theme }) => theme.mainColor};
  cursor: pointer;
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.whiteColor};
  background-image: url(${({ iconBlack }) => iconBlack});

  &:hover {
    background-color: #000;
    background-image: url(${({ iconWhite }) => iconWhite});
  }
`;

export default ButtonIcon;
