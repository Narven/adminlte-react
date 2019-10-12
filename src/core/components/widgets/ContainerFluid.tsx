import React from 'react';
import styled from 'styled-components';

const StyledContainerFluid = styled.div`
  width: 100%;
  padding-right: 7.5px;
  padding-left: 7.5px;
  margin-right: auto;
  margin-left: auto;
`;

const ContainerFluid = (props: any) => (
  <StyledContainerFluid {...props}></StyledContainerFluid>
);

export default ContainerFluid;
