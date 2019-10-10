import styled from 'styled-components';

export const StyledFormGroup = styled.div`
  margin-bottom: 1rem;
`;

export interface IFormGroup {
  id?: string;
  label?: string;
  children?: any;
  placeholder?: string;
  value?: any;
  onChange?: (e: any) => void;
}

export const StyledFormControlInput = styled.input`
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
