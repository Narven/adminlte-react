import React from 'react';
import styled from 'styled-components';

interface IForm {
  children?: any;
}

const StyledForm = styled.form<IForm>``;

const Form = (props: IForm) => {
  return <StyledForm role='form'>{props.children}</StyledForm>;
};

export default Form;
