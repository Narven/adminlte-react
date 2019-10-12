import React from 'react'
import styled from 'styled-components'

interface IProps {
  title?: string
  subtitle?: string
}

const StyledBrand = styled.a`
  background-color: #367fa9;
  color: #fff;
  border-bottom: 0 solid transparent;
  transition: width .3s ease-in-out;
  display: block;
  float: left;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  width: 230px;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  padding: 0 15px;
  font-weight: 300;
  overflow: hidden;
`

const StyledLogoMini = styled.span`
display: none;
font-weight: bold;
`

const StyledLogoBig = styled.span`
display: block;
`

const Brand = (props: IProps) => {
  return (
    <StyledBrand href={'#'}>
      <StyledLogoMini>{props.title || ''}</StyledLogoMini>
      <StyledLogoBig><b>{props.title || ''}</b>{props.subtitle || 'Needs Title'}</StyledLogoBig>
    </StyledBrand>
  )
}

export default Brand
