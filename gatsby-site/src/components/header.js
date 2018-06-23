import React from 'react'
import Styled, {css} from 'styled-components'
import Media from '../components/mediaQueries'
import Dimensions from '../styles/styleVariables'
import Hamburger from '../icons/hamburger'
import Menu from '../components/menu'
import Contact from '../components/contact'
import Colors from '../styles/colors'
import SVGContainer from '../components/svg-loader'
import Logo from '../artwork/header-logo.svg'
import MailIcon from '../artwork/mail-icon.svg'

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
  height: ${Dimensions.headerSpaceSmall};
  width: 100%;
  background-color: ${white};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.8rem;
  ${Media.forMediumPhonesUp`
    height: ${Dimensions.headerSpaceMedium};
  `}
  ${Media.forBigPhonesUp`
    height: ${Dimensions.headerSpaceBig};
  `}
  .header-logo{
    position: relative;
    left: 2.6pt;
    top: 1.25pt;
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


const Header = ({ active, toggleMenu, showContactOverlay, toggleContactOverlay }) => (
  <StyledHeader active={active}>
      <Hamburger
        active={active}
        clickHandler={toggleMenu}/>
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
