import React from 'react';
import styled from 'styled-components';

const StyledDropdownDivider = styled.div`
  margin: 0;
  height: 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
`;

const DropdownDivider = () => <StyledDropdownDivider />;

export default DropdownDivider;
