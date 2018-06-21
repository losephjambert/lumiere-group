import React from 'react'
import Styled, {css} from 'styled-components'

const HamburgerStyle = Styled.div`
top: 1.5rem;
left: 1.5rem;
width: 2.8rem;
height: 3rem;
position: relative;
z-index: 9999;
display: inline-flex;
transform: rotate(0deg);
transition: .5s ease-in-out;
cursor: pointer;

span{
  display: block;
  position: absolute;
  height: .4rem;
  width: 100%;
  background: white;
  opacity: 1;
  left: 0;
  transform: rotate(0deg) translate3d(0,0,);
  transition: 250ms ease-in-out;
}

span:nth-child(1) {
  top: 0rem;
  ${props => !props.active ? 'transition-delay: 250ms' : 'transition-delay: 0ms;'}

}

span:nth-child(2),span:nth-child(3) {
  top: 1.3rem;
  ${props => props.active ? 'transition-delay: 250ms' : 'transition-delay: 0ms;'}
}

span:nth-child(4) {
  bottom: 0rem;
  ${props => !props.active ? 'transition-delay: 250ms' : 'transition-delay: 0ms;'}

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

const Hamburger = ({ active }) => (
  <HamburgerStyle active={active}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </HamburgerStyle>
  
  )
  
  export default Hamburger