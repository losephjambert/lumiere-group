import React from 'react'
import Styled, {css} from 'styled-components'

const HamburgerStyle = Styled.div`
position: fixed;
top: 3rem;
left: 3rem;
width: 2.7rem;
height: 2.1rem;
z-index: 50;
display: inline-flex;
transform: rotate(0deg);
transition: ${props => props.theme.transition};
cursor: pointer;
&:hover > span{
  background-color: ${props => props.theme.hoverColor};
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
    props.active ? `background-color: ${props.theme.white};` : `background-color: ${props.theme.black};`}
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

const Hamburger = ({ active, clickHandler }) => (
  <HamburgerStyle
    onClick={(e)=>clickHandler(e)}
    active={active}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </HamburgerStyle>
  
  )
  
  export default Hamburger