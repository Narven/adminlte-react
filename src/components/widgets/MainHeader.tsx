import React from 'react'
import styled from 'styled-components'

const StyledMainHeader = styled.header`
position: relative;
max-height: 100px;
z-index: 1030;
display: block;
box-sizing: border-box;
`

const MainHeader = (props: any) => {
  return (
    <StyledMainHeader>
      {props.children}
    </StyledMainHeader>
  )
}

export default MainHeader
