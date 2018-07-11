import React from 'react'
import Styled, { css } from 'styled-components'
import SVGContainer from '../components/svg-loader'
import Logo from '../assets/menu-logo.svg'
import {hideMenu, showMenu} from '../styles/animations'

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
  padding: 0 0 0em;
  transition: transform ${props=>props.theme};
  transform-origin: center;
  ${props =>
    !props.active ?
    `animation: ${hideMenu} ${props.theme.transition} forwards;`
    :
    `animation: ${showMenu} ${props.theme.transition} forwards;`
  }

  .menu-logo{
    svg{
      min-width: 17rem;
      margin: 1.8em 0 7.5em;
      ${props=>props.theme.forMediumPhonesUp`
      min-width: 19.2rem;      
      `}
    }
    g{
      stroke: ${props=>props.theme.white};
    }
    .logo-shapes{
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
  width: 90%;
  max-width: 57.2rem;
  margin-bottom: 7.5em;
`

const Item = Styled.li`
  color: ${props=>props.theme.white};
  font-size: 2.8rem;
  list-style-type: none;
  border-top: .1em solid ${props=>props.theme.white};
  width: 100%;
  text-align: center;
  padding: 1em 0;
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
  ${props=>props.theme.forMediumPhonesUp`
    padding: 1.4em 0;    
  `}
`

const ContactInfo = Styled.p`
  color: ${props=>props.theme.white};
  font-size: 1.8rem;
  display: flex;
  justify-content: space-around;
  width: 90%;
  max-width: 38.4rem;
  font-family: Europa Regular Italic;
  
  ._divider{
    font-family: Europa Regular;
  }
`

const Menu = ({ active }) => (
  <Container active={active}>
    <SVGContainer source={Logo} className="menu-logo" />
    <MenuItems>
      <Item>About</Item>
      <Item>Team</Item>
      <Item>Services</Item>
      <Item>Contact</Item>
    </MenuItems>
    <ContactInfo>
      <span>info@thelumieregroup.com</span>
      <span className="_divider">|</span>
      <span>206.323.9827</span>
    </ContactInfo>
  </Container>

)

export default Menu
