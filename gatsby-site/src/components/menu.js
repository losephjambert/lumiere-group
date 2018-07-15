import React from 'react'
import Styled, { css } from 'styled-components'
import SVGContainer from '../components/svg-loader'
import Logo from '../assets/menu-logo.svg'
import {hideMenu, showMenu} from '../styles/animations'
// import Link from 'react-scroll'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Container = Styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props=>props.theme.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 1.6rem;
  transition: transform ${props=>props.theme};
  transform-origin: center;
	overflow: auto;
  -ms-overflow-style: none;  // IE 10+
  overflow: -moz-scrollbars-none;  // Firefox
  &::-webkit-scrollbar { 
    display: none;  // Safari and Chrome
  }
  ${props =>
    !props.active ?
    `animation: ${hideMenu} ${props.theme.transition} forwards;`
    :
    `animation: ${showMenu} ${props.theme.transition} forwards;`
  }

  .menu-logo{
    position: relative;
    top: -.7rem;
    svg{
      min-width: 17rem;
      margin: 1.8em 0 7.5em;
    }
    ${props=>props.theme.forTabletLandscapeUp`
      position: initial;
      top: auto;
      svg{
        min-width: 23.2rem;
      }
    `}
    g{
      stroke: ${props=>props.theme.white};
    }
    .logo-shapes{
      display: none;
      stroke: none;
      fill: ${props=>props.theme.white};
    }
  }

  .close{
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
      min-width: 2rem;
    }
    svg > g > g > line{
      stroke: ${props=>props.theme.white};
    }
    &:hover{
      cursor: pointer;
    }
  }
`

const MenuItems = Styled.ul`
  width: 80%;
  max-width: 57.2rem;
  margin-bottom: 7.5em;
  ${props=>props.theme.forTabletLandscapeUp`
    width: 90%;
  `}
`

const Item = Styled.li`
  color: ${props=>props.theme.white};
  font-size: 2.2rem;
  list-style-type: none;
  border-top: .1em solid ${props=>props.theme.white};
  width: 100%;
  text-align: center;
  padding: 2.4rem 0;
  margin: 0 auto;
  font-family: Europa Regular;
  transition: 150ms;
  &:nth-last-of-type(1){
    border-bottom: .1em solid ${props=>props.theme.white};
  }
  &:hover{
    cursor: pointer;
    color: ${props =>props.theme.hoverColor};
  }
  ${props=>props.theme.forTabletLandscapeUp`
    font-size: 2.8rem;
    padding: 3.6rem 0;
  `}
`

const ContactInfo = Styled.p`
  color: ${props=>props.theme.white};
  font-size: 1.4rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  font-family: Europa Bold Italic;
  text-align: center;
  margin-top: auto;
  span{
    margin-bottom: 1.4rem;
  }
  ._divider{
    display: none;
    margin: 0 1rem;
    font-family: Europa Regular;
  }
  ${props=>props.theme.forTabletLandscapeUp`
  flex-flow: row wrap;
  margin-top: 0;
  font-size: 1.8rem;
  span{
    margin-bottom: 0;
  }
  ._divider{
      display: inline-flex;
    }
  `}
`

class Menu extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments)
    })

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments)
    })

  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  render() {
    const {active, toggleContactOverlay, toggleMenu} = this.props
    return(
      <Container active={active}>
        <SVGContainer source={Logo} className="menu-logo" />
        <MenuItems>
          <a href='#about'><Item onClick={()=>toggleMenu()}>About</Item></a>
          <a href='#team'><Item onClick={()=>toggleMenu()}>Team</Item></a>
          <a href='#services'><Item onClick={()=>toggleMenu()}>Services</Item></a>
          <Item onClick={()=>toggleContactOverlay()}>Contact</Item>
        </MenuItems>
        <ContactInfo>
          <span>info@thelumieregroup.com</span>
          <span className="_divider">|</span>
          <span>206.323.9827</span>
        </ContactInfo>
      </Container> 
    )
  }
}

// const Menu = ({ active, toggleContactOverlay }) => (
//   <Container active={active}>
//     <SVGContainer source={Logo} className="menu-logo" />
//     <MenuItems>
//       <Item>About</Item>
//       <Item>Team</Item>
//       <Item>Services</Item>
//       <Item onClick={()=>toggleContactOverlay()}>Contact</Item>
//     </MenuItems>
//     <ContactInfo>
//       <span>info@thelumieregroup.com</span>
//       <span className="_divider">|</span>
//       <span>206.323.9827</span>
//     </ContactInfo>
//   </Container>

// )

export default Menu
