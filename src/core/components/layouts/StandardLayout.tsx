import React, { Fragment } from 'react';
import styled from 'styled-components';
import Brand from '../widgets/Brand';
import Footer from '../widgets/Footer';
import MainSidebar from '../widgets/MainSidebar';
import Navbar from '../widgets/Navbar/Navbar';
import SettingsSidebar from '../widgets/SettingsSidebar';
import MainHeader from '../widgets/MainHeader';

const StyledContentWrapper = styled.div`
  min-height: 328px;
  background: #f4f6f9;
  transition: margin-left 0.3s ease-in-out;
  margin-left: 250px;
  z-index: 3000;
`;

// <div className='page page-dashboard'>

// @ts-ignore
const StandardLayout = ({ children, ...rest }) => {
  return (
    <Fragment>
      <Navbar />

      <MainSidebar />

      <StyledContentWrapper>{children}</StyledContentWrapper>

      <Footer
        companyName={'Company'}
        companyUrl={'https://company.io?ref=admin'}
      />
      <SettingsSidebar />
    </Fragment>
  );
};

export default StandardLayout;
