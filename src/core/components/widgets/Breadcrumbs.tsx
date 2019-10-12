import React, { useContext } from 'react';
import styled from 'styled-components';

export interface IBreadcrumb {
  title: string;
  subtitle?: string;
  url?: string;
  icon?: string;
}

const StyledBreadcrumbs = styled.ol`
  background: 0 0;
  line-height: 1.8rem;
  margin-bottom: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  border-radius: 0.25rem;
  margin-top: 0;
`;

interface IBreadcrumbItem {
  active?: boolean;
}

const StyledBreadcrumbItem = styled.li<IBreadcrumbItem>`
  padding-left: 0.5rem;
  color: ${props => (props.active ? '#6c757d' : 'color: #212529')};
`;

const BreadcrumbItem = (props: any) => {
  return <StyledBreadcrumbItem></StyledBreadcrumbItem>;
};

interface IBreadcrumbs {
  items: IBreadcrumb[];
}

const Breadcrumbs = (props: IBreadcrumbs) => {
  return (
    <StyledBreadcrumbs {...props}>
      {props.items &&
        props.items.map((bc: IBreadcrumb, index) => {
          const className =
            props.items.length === index - 1 ? 'active' : 'fa' + bc.icon;

          return (
            <BreadcrumbItem key={index}>
              <a href={bc.url}>
                <i className={className} /> {bc.title}
              </a>
            </BreadcrumbItem>
          );
        })}

      <BreadcrumbItem active>Dashboard</BreadcrumbItem>
    </StyledBreadcrumbs>
  );
};

export { Breadcrumbs, BreadcrumbItem };
