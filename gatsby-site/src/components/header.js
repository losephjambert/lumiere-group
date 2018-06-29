import React from 'react'
import Styled, {css} from 'styled-components'
import Media from '../components/mediaQueries'
import Dimensions from '../styles/styleVariables'
import Hamburger from '../icons/hamburger'
import Menu from '../components/menu'
import Contact from '../components/contact'
import Colors from '../styles/colors'
import SVGContainer from '../components/svg-loader'
import Logo from '../assets/header-logo.svg'
import MailIcon from '../assets/mail-icon.svg'

// Header Component
// height: 92px;
// always fixed
// menu trigger left (component) onClick activate menu component
// mail trigger right (component) onClick activate mail component

const {
  blueBackground ,
  yellowBackground ,
  hoverColor ,
  white ,
  black
} = Colors

const StyledHeader = Styled.header`
  height: ${Dimensions.headerSpaceBig};
  width: 100%;
  background-color: ${white};
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.8rem;
  .header-logo{
    position: relative;
    left: 2.6pt;
    top: 1.25pt;
    transition: 200ms;
    opacity: ${props => props.showHeaderLogo ? '1;' : '0;'}
    & > svg > g > g > .cls-1{
      fill: ${black};
    }
    svg{
      width: 5.6rem;
      transition: 200ms;
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
`


const Header = ({ showHeaderLogo, active, toggleMenu, showContactOverlay, toggleContactOverlay }) => (
  <StyledHeader
    showHeaderLogo={showHeaderLogo}
    active={active}>
      <Hamburger
        active={active}
        clickHandler={toggleMenu}
        showContactOverlay={showContactOverlay}/>
    <SVGContainer source={Logo} className='header-logo' />   
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
