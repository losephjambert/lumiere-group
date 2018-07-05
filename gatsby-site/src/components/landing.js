import React from 'react'
import SVGContainer from '../components/svg-loader'
import LandingLogo from '../assets/landing-logo.svg'
import Styled from 'styled-components'

const LogoSVGContainer = Styled(SVGContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: ${props=>props.show ? 1 : -10};
  top: ${props=>props.theme.headerSpaceBig};
  right: 0;
  left: 0;
  height: 100vh;
  svg{
    width: 31.4rem;
    position: relative;
    top: -4.5rem;
    .landing-logo-svg{
      fill: ${props=>props.theme.black};
    }
  }
`

const Landing = ({ show }) => (
<div>
  <LogoSVGContainer source={LandingLogo} className='landing-logo' show={!show}/>
</div>

)

export default Landing