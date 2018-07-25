import React from 'react'
import Styled, {css} from 'styled-components'

// const HamburgerStyle = Styled.div`
//   position: fixed;
//   top: 2rem;
//   left: 2rem;
//   width: 3rem;
//   height: 2rem;
//   z-index: 50;
//   display: inline-flex;
//   transform: rotate(0deg);
//   transition: ${props => props.theme.transition};
//   cursor: pointer;
//   &:hover > span{
//     background-color: ${props => props.theme.hoverColor};
//   }
//   ${props=>props.showModal && css`opacity: 0;`}
//   ${props=>props.theme.forTabletLandscapeUp`
//     width: 2.7rem;
//     height: 2.1rem;
//     top: 3rem;
//     left: 3rem;
//   `}

// span{
//   display: block;
//   position: absolute;
//   height: .3rem;
//   width: 100%;
//   opacity: 1;
//   left: 0;
//   transform: rotate(0deg) translate3d(0,0,);
//   transition: inherit;
//   ${props =>
//     props.active ? `background-color: ${props.theme.white};` : `background-color: ${props.theme.black};`}
// }

// span:nth-child(1) {
//   top: 0rem;
// }

// span:nth-child(2),span:nth-child(3) {
//   top: .8rem;
//   ${props=>props.theme.forTabletLandscapeUp`
//     top: .85rem;
//   `}
// }

// span:nth-child(4) {
//   bottom: 0;
// }

// ${props =>
//   props.active && css`
//   span:nth-child(1) {
//     transform: translate3d(0,1.3rem,0);
//     opacity: 0;
//   }
  
//   span:nth-child(2) {
//     transform: rotate(45deg);
//   }
  
//   span:nth-child(3) {
//     transform: rotate(-45deg);
//   }
  
//   span:nth-child(4) {
//     transform: translate3d(0,-1.3rem,0);
//     opacity: 0;
//   }
//   `}
// `

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
`

const Span = Styled.span`
  width: 100%;
  background-color: ${props=>props.theme.black};
  height: 4px;
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
        transform: translate3d(4px,0,0) rotate(45deg);
      }
      &:nth-child(3) {
        transform-origin: left;
        transform: translate3d(4px,0,0) rotate(-45deg);
      }
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