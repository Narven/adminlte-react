import React from 'react';
import {
  StyledFormGroup,
  StyledFormControlInput,
  IFormGroup
} from './FormGroup';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IFormGroupEmail extends IFormGroup {
  icon?: IconDefinition;
}

const FormGroupEmail = (props: IFormGroupEmail) => {
  return (
    <StyledFormGroup>
      <label htmlFor={props.id}>{props.label}</label>
      <StyledFormControlInput type='email' {...props} />
    </StyledFormGroup>
  );
};

export default FormGroupEmail;
