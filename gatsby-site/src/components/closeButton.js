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
  ${props=>props.theme.forTabletLandscapeUp`
    top: 31.5px;
    right: 28px;
    width: 32px;
  `}
`

const Span = Styled.span`
  width: 100%;
  height: 3px;
  background-color: ${props=>props.localTheme ? props.localTheme.main : props.theme.black};
  &:nth-child(2) {
    opacity: 0;
  }
  &:nth-child(1){
    transform-origin: left;
    transform: translate3d(3px,0,0) rotate(45deg);
  }
  &:nth-child(3) {
    transform-origin: left;
    transform: translate3d(3px,0,0) rotate(-45deg);
  }
  ${props=>props.theme.forTabletLandscapeUp`
    height: 4px;
    &:nth-child(1){
      transform: translate3d(4px,-1px,0) rotate(45deg);
    }
    &:nth-child(3) {
      transform: translate3d(4px,0,0) rotate(-45deg);
    }
  `}
`

const CloseButton = ({localTheme}) => (
    <Container>
      <Span localTheme={localTheme}></Span>
      <Span localTheme={localTheme}></Span>
      <Span localTheme={localTheme}></Span>
    </Container>
  
  )
  
export default CloseButton