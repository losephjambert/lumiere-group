import React from 'react'
import Styled from 'styled-components'

const HamburgerStyle = Styled.div`
width: 60px;
height: 45px;
position: relative;
transform: rotate(0deg);
transition: .5s ease-in-out;
cursor: pointer;

span{
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

span:nth-child(1) {
  top: 0px;
}

span:nth-child(2),span:nth-child(3) {
  top: 18px;
}

span:nth-child(4) {
  top: 36px;
}

.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
`

const Hamburger = ({ /*Hamburger Metadata*/ }) => (
  <HamburgerStyle>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </HamburgerStyle>
  
  )
  
  export default Hamburger