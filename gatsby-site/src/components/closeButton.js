import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  position: fixed;
  top: 18px;
  right: 18px;
  z-index: 50;
  width: 30px;
  height: 25px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  transition: 200ms;
  cursor: pointer;
`

const Span = Styled.span`
  width: 100%;
  height: 4px;
  background-color: ${props=>props.localTheme ? props.localTheme.main : props.theme.black};
  &:nth-child(2) {
    opacity: 0;
  }
  &:nth-child(1){
    transform-origin: left;
    transform: translate3d(4px,0,0) rotate(45deg);
  }
  &:nth-child(3) {
    transform-origin: left;
    transform: translate3d(4px,0,0) rotate(-45deg);
  }
`

const CloseButton = ({localTheme}) => (
    <Container>
      <Span localTheme={localTheme}></Span>
      <Span localTheme={localTheme}></Span>
      <Span localTheme={localTheme}></Span>
    </Container>
  
  )
  
export default CloseButton