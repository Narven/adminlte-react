import React, { Fragment } from 'react';
import styled from 'styled-components';
import { BackgroundColor, ForegroundColor } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons'

interface IStyledSmallBox {
  title?: string | number;
  subtitle?: string | number;
  icon?: IconDefinition;
  children?: any;
  primary?: boolean;
  success?: boolean;
  info?: boolean;
  danger?: boolean;
  warning?: boolean;
}

const StyledSmallBox = styled.div<IStyledSmallBox>`
  margin-bottom: 1rem !important;
  border-radius: 0.25rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
  display: block;
  position: relative;
  margin-bottom: 1rem !important;
  background-color: ${props => {
    if (props.primary === true) return BackgroundColor.Primary;
    if (props.success === true) return BackgroundColor.Success;
    if (props.info === true) return BackgroundColor.Info;
    if (props.danger === true) return BackgroundColor.Danger;
    if (props.warning === true) return BackgroundColor.Warning;

    return BackgroundColor.Default;
  }};
  color: ${props => {
    if (props.primary === true) return ForegroundColor.Primary;
    if (props.success === true) return ForegroundColor.Success;
    if (props.info === true) return ForegroundColor.Info;
    if (props.danger === true) return ForegroundColor.Danger;
    if (props.warning === true) return ForegroundColor.Warning;

    return ForegroundColor.Default;
  }};
`;

const StyledSmallBoxInner = styled.div`
  padding: 10px;
`;

const StyledTitle = styled.h3`
  font-size: 2.2rem;
  z-index: 5;
  font-weight: 700;
  margin: 0 0 10px 0;
  padding: 0;
  white-space: nowrap;
`;

const StyledIconBox = styled.div`
  color: rgba(0, 0, 0, 0.15);
  z-index: 0;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  top: 20px;
  position: absolute;
  right: 15px;
  :hover {
    transition: all 0.3s linear;
  }
`;

const StyledFooter = styled.a`
  background: rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.8);
  display: block;
  padding: 3px 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  z-index: 10;

  & > .fa {
    margin-left: 10px;
  }
`;

const renderMainIcon = (props: IStyledSmallBox) => {
  return props.icon ? <StyledIcon icon={props.icon} /> : <Fragment />;
};

const SmallBox = (props: IStyledSmallBox) => {
  console.debug('XXXXX', props.title);
  return (
    <StyledSmallBox
      primary={props.primary}
      danger={props.danger}
      info={props.info}
      success={props.success}
      warning={props.warning}
    >
      <StyledSmallBoxInner>
        <StyledTitle>{props.title}</StyledTitle>
        <p>{props.subtitle}</p>
      </StyledSmallBoxInner>
      <StyledIconBox>{renderMainIcon(props)}</StyledIconBox>
      <StyledFooter>
        More Info&nbsp;
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </StyledFooter>
    </StyledSmallBox>
  );
};

export default SmallBox;
