import React from 'react'
import Styled, {css} from 'styled-components'
import SVGContainer from '../components/svg-loader'
import Border from '../assets/lumiere-group-with-border.svg'
import {scrollManager, windowManager} from './eventManager'

const FooterContainer = Styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  position: fixed;
  z-index: ${props => props.showFooter ? 2 : 0};
  top: ${props=>props.theme.headerSpaceBig};
  bottom: 0;
  transition: .5s;
  width: 100%;
  background-color: ${props=>props.theme.white};
  ${props => props.showFooter && css`
    ${FooterSVG},
    ${ContactInfo}{
      opacity: 1 !important;
    }
  `}
`
  
  const FooterSVG = Styled(SVGContainer)`
  max-width: 70rem;
  height: 42.5rem;
  margin: 0 0 5.4rem;
  opacity: 0;
  svg{
    max-width: 70rem;
    height: 100%;
  }
`
  
  const ContactInfo = Styled.p`
  opacity: 0;
  color: ${props=>props.theme.black};
  font-size: 1.8rem;
  display: flex;
  justify-content: space-around;
  font-family: Europa Bold Italic;
  ._divider{
    margin: 0 1rem;
    font-family: Europa Regular;
  }
`

const Footer = ( {scrollYPosition, dimensions:{scrollHeight, height} } ) => (

      <FooterContainer showFooter={scrollYPosition >= scrollHeight - (height/2)} >
        <FooterSVG source={Border} />
        <ContactInfo>
          <span>info@thelumieregroup.com</span>
          <span className="_divider">|</span>
          <span>206.323.9827</span>
          <span className="_divider">|</span>
          <span>Contact { Math.trunc(scrollYPosition) }</span>
        </ContactInfo>
      </FooterContainer>

)

export default windowManager(scrollManager(Footer))