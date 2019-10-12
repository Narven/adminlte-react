import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-family: inherit;
  line-height: 1.2;
  font-size: 1.8rem;
`;

const H1 = (props: any) => <StyledH1 {...props}></StyledH1>;

export default H1;
