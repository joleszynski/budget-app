import React from 'react';
import styled from 'styled-components';
import LogoutIcon from 'assets/icons/logout.svg';

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${LogoutIcon});
  cursor: pointer;
`;

/*eslint-disable */
const Logout = ({ ...rootDOMAttributes }) => <Icon {...rootDOMAttributes} />;

export default Logout;
