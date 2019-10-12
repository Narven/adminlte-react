import React from 'react';
import styled from 'styled-components';

interface IProps {
  version?: string;
  companyName?: string;
  companyUrl?: string;
}

const StyledFooter = styled.footer`
margin-left: 250px;
background: #fff;
border-top: 1px solid #dee2e6;
color: #869099;
padding: 1rem;
transition: margin-left .3s ease-in-out;
z-index: 3000;
display: block;
}
`;

const Footer = (props: IProps) => {
  const date = new Date();

  return (
    <StyledFooter>
      <div className='pull-right hidden-xs'>
        <b>Version</b> {props.version || '0.0.0'}
      </div>
      <strong>
        Copyright © {date.getFullYear()}
        &nbsp;
        <a href={props.companyUrl} target='_blank' rel='noopener noreferrer'>
          {props.companyName || 'Company Name'}
        </a>
        .
      </strong>{' '}
      All rights reserved.
    </StyledFooter>
  );
};

export default Footer;
