import React from 'react'
import Link from 'gatsby-link'
import Styled from 'styled-components'
import Media from '../components/mediaQueries'
import Dimensions from '../styles/styleVariables'
import Hamburger from '../icons/hamburger'

// Header Component
// height: 92px;
// always fixed
// menu trigger left (component) onClick activate menu component
// mail trigger right (component) onClick activate mail component

const StyledHeader = Styled.header`
  height: ${Dimensions.headerSpaceSmall};
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  ${Media.forMediumPhonesUp`
    height: ${Dimensions.headerSpaceMedium};
  `}
  ${Media.forBigPhonesUp`
    height: ${Dimensions.headerSpaceBig};
  `}
`


const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Hamburger />
  </StyledHeader>

)

export default Header
