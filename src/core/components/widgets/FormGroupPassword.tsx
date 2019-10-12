import React from 'react';
import styled from 'styled-components';
import {
  StyledFormGroup,
  StyledFormControlInput,
  IFormGroup
} from './FormGroup';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IFormGroupPassword extends IFormGroup {
  icon?: IconDefinition;
}

const FormGroupPassword = (props: IFormGroupPassword) => {
  return (
    <StyledFormGroup>
      <label htmlFor={props.id}>{props.label}</label>
      <StyledFormControlInput {...props} type='password' />
    </StyledFormGroup>
  );
};

export default FormGroupPassword;
