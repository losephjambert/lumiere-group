import React from 'react'
import Styled, {css} from 'styled-components'
import Hamburger from '../icons/hamburger'
import Menu from '../components/menu'
import Contact from '../components/contact'
import SVGContainer from '../components/svg-loader'
import MailIcon from '../assets/mail-icon.svg'
import {scrollManager, windowManager} from './hocEventManager'

const StyledHeader = Styled.header`
  height: ${props=>props.theme.headerSpaceBig};
  width: 100%;
  background-color: ${props=>props.theme.white};
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.8rem;
  transition: 200ms;
  .header-logo{
    position: relative;
    left: 2.6pt;
    top: .1rem;
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
  .header-mail-icon{
    cursor: pointer;
    svg{
      width: 3.4rem;
      position: relative;
      top: 2px;
    }
  }
  ${props =>
    props.showModal && css`
      transform: translate3d(0,-${props=>props.theme.headerSpaceBig},0);
  `}
`


const Header = ( { active, toggleMenu, showContactOverlay, toggleContactOverlay, showModal } ) => (
  <StyledHeader
    showModal={showModal}
    showHeaderLogo={null}
    Y= {null}
    height={null}
    active={active}>
      <Hamburger
        active={active}
        clickHandler={toggleMenu}
        showContactOverlay={showContactOverlay}/>
    <span  onClick={(e)=>toggleContactOverlay(e)}>
      <SVGContainer
        source={MailIcon}
        className='header-mail-icon' />
    </span>
    <Menu active={active}/>
    <Contact active={showContactOverlay} toggleContactOverlay={toggleContactOverlay}/>
  </StyledHeader>

)

export default Header
