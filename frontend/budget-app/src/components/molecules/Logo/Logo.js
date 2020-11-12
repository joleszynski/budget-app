import React from 'react';
import styled from 'styled-components';

import MainHeading from 'components/atoms/MainHeading/MainHeading';

const StyledHeadingWrapper = styled.div`
  width: 50%;
  margin-top: 20px;
`;

const Logo = () => (
  <StyledHeadingWrapper>
    <MainHeading>Budget App</MainHeading>
    <MainHeading secondary>#TakeCareOfYourMoney</MainHeading>
  </StyledHeadingWrapper>
);

export default Logo;
