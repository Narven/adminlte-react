import React from 'react';
import styled from 'styled-components';
import { ForegroundColor, BackgroundColor } from '../constants';

interface IBadge {
  primary?: boolean;
  success?: boolean;
  info?: boolean;
  danger?: boolean;
  warning?: boolean;
  navbar?: boolean;
}

const StyledBadge = styled.span<IBadge>`
  font-size: ${props => (props.navbar ? '0.6rem' : '75%')};
  font-weight: ${props => (props.navbar ? 300 : 700)};
  padding: ${props => (props.navbar ? '2px 4px' : '.25em .4em')};
  position: absolute;
  right: 5px;
  top: 9px;
  color: ${props => {
    if (props.primary === true) return ForegroundColor.Primary;
    if (props.success === true) return ForegroundColor.Success;
    if (props.info === true) return ForegroundColor.Info;
    if (props.danger === true) return ForegroundColor.Danger;
    if (props.warning === true) return ForegroundColor.Warning;

    return ForegroundColor.Default;
  }}
  background-color: ${props => {
    if (props.primary === true) return BackgroundColor.Primary;
    if (props.success === true) return BackgroundColor.Success;
    if (props.info === true) return BackgroundColor.Info;
    if (props.danger === true) return BackgroundColor.Danger;
    if (props.warning === true) return BackgroundColor.Warning;

    return BackgroundColor.Default;
  }};
  display: inline-block;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

const Badge = (props: any) => <StyledBadge {...props}></StyledBadge>;

export default Badge;
