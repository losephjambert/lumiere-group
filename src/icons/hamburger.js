import React from 'react'
import Styled, { css } from 'styled-components'

const HamburgerStyle = Styled.div`

  position: fixed;
  top: 18px;
  left: 18px;
  z-index: 50;
  width: 30px;
  height: 25px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  transition: 300ms linear;
  cursor: pointer;
  &:hover > span{
    background-color:${props => props.theme.hoverColor};
  }
  ${props => props.theme.forTabletLandscapeUp`
    top: 31.5px;
    width: 32px;
  `}
`

const Span = Styled.span`
  width: 100%;
  background-color: ${props => props.theme.black};
  height: 3px;
  transition: 300ms linear;
  margin-bottom: 5px;
  &:nth-child(4),
  &:nth-child(5) {
    opacity: 0;
    position: absolute;
    height: 2.5px;
  }
  ${props => props.active && css`
    background-color: ${props => props.theme.white};
    &:nth-child(5) {
      opacity: 1;
      transform: rotate(45deg);
    }
    &:nth-child(4) {
      opacity: 1;
      transform: rotate(-45deg);
    }
    &:nth-child(2) {
      opacity: 0;
      transform: translate3d(4px,0,0);
    }
    &:nth-child(1){
      opacity: 0;
      transform: translate3d(0,3px,0);
    }
    &:nth-child(3) {
      opacity: 0;
      transform: translate3d(0,-3px,0);
    }
  `}
  ${props => props.theme.forTabletLandscapeUp`
    ${props => props.active && css`
      &:nth-child(1){
        transform: translate3d(0,3px,0);
      }
      &:nth-child(3) {
        transform: translate3d(0,-3px,0);
      }
    `}
  `}

`

const Hamburger = ({ active, clickHandler, showModal }) => (
  <HamburgerStyle
    onClick={(e) => clickHandler(e)}
    showModal={showModal}>
    <Span active={active}></Span>
    <Span active={active}></Span>
    <Span active={active}></Span>
    <Span active={active}></Span>
    <Span active={active}></Span>
  </HamburgerStyle>

)

export default Hamburger