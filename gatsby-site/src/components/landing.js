import React from 'react'
import SVGContainer from '../components/svg-loader'
import LandingLogo from '../assets/landing-logo.svg'
import Styled from 'styled-components'
import Dimensions from '../styles/styleVariables'

// Landing Component
// displays landing page content
// displays logo component inside it

const LogoSVGContainer = Styled(SVGContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 0;
  top: ${Dimensions.headerSpaceBig};
  right: 0;
  left: 0;
  height: 100vh;
  svg{
    width: 31.4rem;
    position: relative;
    top: -4.5rem;
    .landing-logo-svg{
      fill: black;
    }
  }
`

const Landing = ({ /*Landing Metadata*/ }) => (
<div>
  <LogoSVGContainer source={LandingLogo} className='landing-logo' />
</div>

)

export default Landing