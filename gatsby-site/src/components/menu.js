import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import Media from './mediaQueries'

import SVGContainer from '../components/svg-loader'
import Logo from '../artwork/menu-logo.svg'
import {hideMenu, showMenu} from '../styles/animations'

const Container = styled.div`
  position: fixed;
  z-index: 98;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 0em;

  transition: transform 300ms ease-in-out;
  transform-origin: center;
  ${props =>
    !props.active ?
    `animation: ${hideMenu} 300ms ease-in-out forwards;`
    :
    `animation: ${showMenu} 300ms ease-in-out forwards;`
  }

  .menu-logo{
    svg{
      min-width: 17rem;
      margin: 1.8em 0 7.5em;
      ${Media.forMediumPhonesUp`
      min-width: 19.2rem;      
      `}
    }
    g{
      stroke: white;
    }
    .logo-shapes{
      stroke: none;
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
      stroke: white;
    }
    &:hover{
      cursor: pointer;
    }
  }
`

const MenuItems = styled.ul`
  width: 90%;
  max-width: 57.2rem;
  margin-bottom: 7.5em;
`

const Item = styled.li`
  color: white;
  font-size: 2.8rem;
  list-style-type: none;
  border-top: .1em solid white;
  width: 100%;
  text-align: center;
  padding: 1em 0;
  margin: 0 auto;
  font-family: Europa Regular;
  &:nth-last-of-type(1){
    border-bottom: .1em solid white;
  }
  &:hover{
    cursor: pointer;
  }
  ${Media.forMediumPhonesUp`
    padding: 1.4em 0;    
  `}
`

const ContactInfo = styled.p`
  color: white;
  font-size: 1.8rem;
  display: flex;
  justify-content: space-around;
  width: 90%;
  font-family: Europa Regular Italic;
  
  ._divider{
    font-family: Europa Regular;
  }
`

// Menu Component
// displays a list of items that are passed into it
// each item onClick will transport user to that location on the site
// has 'X' onClick to close
// required:
//    list of items to display

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
