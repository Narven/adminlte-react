import React from 'react';
import styled from 'styled-components';

interface IStyledCard {
  title?: string;
  subtitle?: string | number;
  icon?: string | undefined;
  children?: any;
  primary?: boolean;
  success?: boolean;
  info?: boolean;
  danger?: boolean;
  warning?: boolean;
}

const StyledCard = styled.div<IStyledCard>`
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem !important;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

const StyledCardHeader = styled.div`
  cursor: move;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  position: relative;
  padding: 0.75rem 1.25rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

const StyledCardTitle = styled.h3`
  float: left;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
`;

const StyledCardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
  word-wrap: break-word;
`;

const Card = (props: IStyledCard) => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardTitle>{props.title || ''}</StyledCardTitle>
      </StyledCardHeader>
      <StyledCardBody>{props.children}</StyledCardBody>
    </StyledCard>
  );
};

export default Card;
