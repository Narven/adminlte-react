import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  StyledFormGroup,
  StyledFormControlInput,
  IFormGroup
} from './FormGroup';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IFormGroupInput extends IFormGroup {
  icon?: IconDefinition;
}

const FormGroupInput = (props: IFormGroupInput) => {
  return (
    <StyledFormGroup>
      <label htmlFor={props.id}>{props.label}</label>
      <StyledFormControlInput {...props} type='input' />
    </StyledFormGroup>
  );
};

export default FormGroupInput;
