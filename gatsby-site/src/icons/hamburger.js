import React from 'react'
import Styled, {css} from 'styled-components'

const HamburgerStyle = Styled.div`

  position: fixed;
  top: 18px;
  left: 18px;
  z-index: 50;
  width: 30px;
  height: 25px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  transition: 200ms;
  cursor: pointer;
  &:hover > span{
    background-color:${props=>props.theme.hoverColor};
  }
  ${props=>props.theme.forTabletLandscapeUp`
    top: 31.5px;
    width: 32px;
  `}
`

const Span = Styled.span`
  width: 100%;
  background-color: ${props=>props.theme.black};
  height: 3px;
  transition: 200ms;
  transform-origin: center;
  ${props=>props.active && css`
    background-color: ${props=>props.theme.white};
    &:nth-child(2),
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
  `}
  ${props=>props.theme.forTabletLandscapeUp`
    height: 4px;
    ${props=>props.active && css`
      &:nth-child(1){
        transform: translate3d(4px,-1px,0) rotate(45deg);
      }
      &:nth-child(3) {
        transform: translate3d(4px,0,0) rotate(-45deg);
      }
    `}
  `}

`

const Hamburger = ({ active, clickHandler, showModal }) => (
  <HamburgerStyle
    onClick={(e)=>clickHandler(e)}
    showModal={showModal}>
    <Span active={active}></Span>
    <Span active={active}></Span>
    <Span active={active}></Span>
  </HamburgerStyle>
  
  )
  
  export default Hamburger