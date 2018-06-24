import React from 'react'
import Styled, {css} from 'styled-components'
import Colors from '../styles/colors'

const {
  blueBackground ,
  yellowBackground ,
  hoverColor ,
  white ,
  black
} = Colors

const HamburgerStyle = Styled.div`
top: 0;
width: 2.7rem;
height: 2.1rem;
z-index: 99;
display: inline-flex;
transform: rotate(0deg);
transition: 250ms ease-in-out;
cursor: pointer;
${props =>
  props.showContactOverlay && css`
    opacity: 0;
  `}
&:hover > span{
  background-color: ${hoverColor};
}

span{
  display: block;
  position: absolute;
  height: 2.1pt;
  width: 100%;
  opacity: 1;
  left: 0;
  transform: rotate(0deg) translate3d(0,0,);
  transition: inherit;
  ${props =>
    props.active ? `background-color: ${white};` : `background-color: ${black};`}
}

span:nth-child(1) {
  top: 0rem;
}

span:nth-child(2),span:nth-child(3) {
  top: .85rem;
}

span:nth-child(4) {
  bottom: 0rem;
}

${props =>
  props.active && css`
  span:nth-child(1) {
    transform: translate3d(0,1.3rem,0);
    opacity: 0;
  }
  
  span:nth-child(2) {
    transform: rotate(45deg);
  }
  
  span:nth-child(3) {
    transform: rotate(-45deg);
  }
  
  span:nth-child(4) {
    transform: translate3d(0,-1.3rem,0);
    opacity: 0;
  }
  `}
`

const Hamburger = ({ active, clickHandler, showContactOverlay }) => (
  <HamburgerStyle
    onClick={(e)=>clickHandler(e)}
    active={active}
    showContactOverlay={showContactOverlay}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </HamburgerStyle>
  
  )
  
  export default Hamburger