import React, { Fragment } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import MainSidebar from './MainSidebar';
import Navbar from './Navbar/Navbar'
import SettingsSidebar from './SettingsSidebar';

const StyledContentWrapper = styled.div`
  min-height: 328px;
  background: #f4f6f9;
  transition: margin-left 0.3s ease-in-out;
  margin-left: 250px;
  z-index: 3000;
`;

// @ts-ignore
const StandardLayout = ({ children, ...rest }) => {
  return (
    <Fragment>
      <Navbar />

      <MainSidebar />

      <StyledContentWrapper>{children}</StyledContentWrapper>

      <Footer
        version={'0.0.1'}
        companyName={'Company'}
        companyUrl={'https://example.com?ref=admin'}
      />
      <SettingsSidebar />
    </Fragment>
  );
};

export default StandardLayout;
