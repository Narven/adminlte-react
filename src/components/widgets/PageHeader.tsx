import React from 'react';
import styled from 'styled-components';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';
import ContainerFluid from './ContainerFluid';
import H1 from './H1';

const StyledContentHeader = styled.div`
  padding: 15px 0.5rem;
`;

interface IProps {
  breadcrumbs?: [];
  pageTitle: string;
  pageSubtitle?: string;
}

const PageHeader = (props: IProps) => {
  return (
    <StyledContentHeader>
      <ContainerFluid>
        <div className='row mb-2'>
          <div className='col-sm-6'>
            <H1 className='m-0 text-dark'>{props.pageTitle}</H1>
          </div>
          <div className='col-sm-6'>
            <Breadcrumbs items={[{ title: 'Some title' }]} />
          </div>
        </div>
      </ContainerFluid>
    </StyledContentHeader>
  );
};

export default PageHeader;
