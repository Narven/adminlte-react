import React from 'react';
import styled from 'styled-components';
import { BackgroundColor, BorderColor, ForegroundColor } from '../../constants';

interface IButton {
  // MISSING DISABLED
  primary?: boolean;
  success?: boolean;
  info?: boolean;
  danger?: boolean;
  warning?: boolean;
  lg?: boolean;
  sm?: boolean;
  xs?: boolean;
  flat?: boolean;
  loading?: boolean;
  block?: boolean;
  children?: JSX.Element;
}

enum LineHeight {
  Default = '1.42857143',
  Lg = '1.3333333',
  Sm = '1.5',
  Xs = '1.5'
}

enum FontSize {
  Default = '14px',
  Lg = '18px',
  Sm = '12px',
  Xs = '12px'
}

enum PaddingSize {
  Default = '6px 12px',
  Lg = '10px 16px',
  Sm = '5px 10px',
  Xs = '1px 5px'
}

const BasedButton = styled.button`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-collapse: collapse;
  border-spacing: 0;
  box-sizing: border-box;
  font: inherit;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  font-family: inherit;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  user-select: none;
  display: block;
  width: 100%;
  border-radius: 3px;
  box-shadow: none;
  border: 1px solid transparent;
  background-color: #f4f4f4;
  color: #444;
  border-color: #ddd;
  text-decoration: none;
  outline: 0;
`;

// padding: 1px 5px;
// font-size: 12px;
// line-height: 1.5;

const StyledDefaultButton = styled(BasedButton)<IButton>`
  cursor: ${props => (props.disabled ? 'not-allowed' : '')};
  line-height: ${props => {
    if (props.lg === true) return LineHeight.Lg;
    if (props.sm === true) return LineHeight.Sm;
    if (props.xs === true) return LineHeight.Xs;

    return LineHeight.Default;
  }};
  font-size: ${props => {
    if (props.lg === true) return FontSize.Lg;
    if (props.sm === true) return FontSize.Sm;
    if (props.xs === true) return FontSize.Xs;

    return FontSize.Default;
  }}
  padding: ${props => {
    if (props.lg === true) return PaddingSize.Lg;
    if (props.sm === true) return PaddingSize.Sm;
    if (props.xs === true) return PaddingSize.Xs;

    return PaddingSize.Default;
  }};
  border-radius: ${props => (props.flat ? 0 : '3px')};
  -webkit-box-shadow: none;
  color: ${props => {
    if (props.primary === true) return ForegroundColor.Primary;
    if (props.success === true) return ForegroundColor.Success;
    if (props.info === true) return ForegroundColor.Info;
    if (props.danger === true) return ForegroundColor.Danger;
    if (props.warning === true) return ForegroundColor.Warning;

    return ForegroundColor.Default;
  }}
  border: 1px solid transparent;
  background-color: ${props => {
    if (props.primary === true) return BackgroundColor.Primary;
    if (props.success === true) return BackgroundColor.Success;
    if (props.info === true) return BackgroundColor.Info;
    if (props.danger === true) return BackgroundColor.Danger;
    if (props.warning === true) return BackgroundColor.Warning;

    return BackgroundColor.Default;
  }};
  border-color:  ${props => {
    if (props.primary === true) return BorderColor.Primary;
    if (props.success === true) return BorderColor.Success;
    if (props.info === true) return BorderColor.Info;
    if (props.danger === true) return BorderColor.Danger;
    if (props.warning === true) return BorderColor.Warning;

    return BorderColor.Default;
  }};
  border-width: 1px;
`;

const Button = (props: any) => <StyledDefaultButton {...props} />;

export default Button;
