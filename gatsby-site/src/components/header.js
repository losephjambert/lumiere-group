import React from 'react'
import Styled, {css} from 'styled-components'
import Hamburger from '../icons/hamburger'
import Menu from './menu'
import SVGContainer from './svg-loader'
import Logo from '../assets/header-logo.svg'
import MailIcon from '../assets/mail-icon.svg'
import {scrollManager, windowManager} from './eventManager'
import Contact from './contact'

const ContactTrigger = Styled.span`
  ${props=>props.showModal || props.showContactOverlay && css`opacity: 0;`}
  .header-mail-icon{
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 50;
    cursor: pointer;
    ${props=>props.theme.forTabletLandscapeUp`
      top: 3rem;
      right: 3rem;
    `}
    svg{
      width: 3rem;
      position: relative;
      .mail-icon{
        transition: 200ms;
        stroke: ${props=>props.theme.black};
        ${props=>props.showMenu && css`stroke: ${props=>props.theme.white};`}
        ${props=>props.theme.forTabletLandscapeUp`
          width: 3.4rem;
        `}
      }
      &:hover{
        .mail-icon{
          stroke: ${props=>props.theme.hoverColor};
        }
      }
    }
  }

`

const HeaderLogoContainer = Styled.div`
  height: ${props=>props.theme.headerSpaceSmall};
  width: 100%;
  background-color: ${props=>props.showMenu ? 'transparent' : props.theme.white};
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.8rem;
  transition: 200ms;
  ${props =>
    props.hide && css`
      opacity: 0;
  `}
  .header-logo{
    transition: inherit;
    opacity: ${props => props.showHeaderLogo ? '1;' : '0;'}
    ${props=> !props.showHeaderLogo && props.showMenu && css`
      opacity: 1;
    `}
    & > svg > g > g > .header-logo-svg{
      fill: ${props=>props.showMenu ? props.theme.white : props.theme.black};
    }
    svg{
      width: 3.6rem;
      transition: inherit;
      ${props=>props.theme.forTabletLandscapeUp`
        width: 5.6rem;
      `}
    }
  }
  ${props=>props.theme.forTabletLandscapeUp`
    height: ${props=>props.theme.headerSpaceBig};
  `}
`


const Header = ( {
  showMenu,
  toggleMenu,
  showContactOverlay,
  toggleContactOverlay,
  showModal,
  scrollYPosition,
  dimensions: {
    height}
  } ) => (
  <header>
    <Menu active={showMenu}/>
    <Hamburger
      active={showMenu}
      clickHandler={toggleMenu}
      showContactOverlay={showContactOverlay}
      showModal={showModal}/>
    <ContactTrigger
      onClick={(e)=>toggleContactOverlay(e)}
      showMenu={showMenu}
      showModal={showModal}
      showContactOverlay={showContactOverlay}>
      <SVGContainer
        source={MailIcon}
        className='header-mail-icon' />
    </ContactTrigger>
    <HeaderLogoContainer
      hide={showModal || showContactOverlay}
      showContactOverlay={showContactOverlay}
      showHeaderLogo={scrollYPosition >= height}
      Y= {scrollYPosition}
      height={height}
      showMenu={showMenu}>
      <SVGContainer source={Logo} className='header-logo' />
    </HeaderLogoContainer>
    <Contact showContactOverlay={showContactOverlay} toggleContactOverlay={toggleContactOverlay}/>
  </header>

)

export default windowManager(scrollManager(Header))
