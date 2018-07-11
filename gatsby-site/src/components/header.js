import React from 'react'
import Styled, {css} from 'styled-components'
import Hamburger from '../icons/hamburger'
import Menu from '../components/menu'
import SVGContainer from '../components/svg-loader'
import Logo from '../assets/header-logo.svg'
import MailIcon from '../assets/mail-icon.svg'
import {scrollManager, windowManager} from './eventManager'

const ContactTrigger = Styled.span`
  .header-mail-icon{
    position: fixed;
    top: 3rem;
    right: 3rem;
    z-index: 30;
    cursor: pointer;
    svg{
      width: 3.4rem;
      position: relative;
      .mail-icon{
        transition: 200ms;
        stroke: ${props=>props.theme.black};
        ${props=>props.showMenu && css`stroke: ${props=>props.theme.white};`}
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
  height: ${props=>props.theme.headerSpaceBig};
  width: 100%;
  background-color: ${props=>props.theme.white};
  position: fixed;
  z-index: 20;
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
    & > svg > g > g > .header-logo-svg{
      fill: ${props=>props.theme.black};
    }
    svg{
      width: 5.6rem;
      transition: inherit;
    }
  }
`


const Header = ( { showMenu, toggleMenu, showContactOverlay, toggleContactOverlay, showModal, scrollYPosition, dimensions:{height} } ) => (
  <header>
    <Hamburger
      active={showMenu}
      clickHandler={toggleMenu}
      showContactOverlay={showContactOverlay}/>
    <Menu active={showMenu}/>
    <ContactTrigger
      onClick={(e)=>toggleContactOverlay(e)}
      showMenu={showMenu}>
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
      active={showMenu}>
      <SVGContainer source={Logo} className='header-logo' />
    </HeaderLogoContainer>
  </header>

)

export default windowManager(scrollManager(Header))
