import React from 'react'
import Styled from 'styled-components'
import SVGContainer from '../components/svg-loader'
import Border from '../assets/lumiere-group-with-border.svg'

const FooterContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  position: fixed;
  z-index: -1;
  top: ${props=>props.theme.headerSpaceBig};
  bottom: 0;
  width: 100%;
  background-color: ${props=>props.theme.white};
`
  
  const FooterSVG = Styled(SVGContainer)`
  transition: 250ms;
  max-width: 70rem;
  height: 42.5rem;
  margin: 0 0 5.4rem;
  opacity: ${props=>props.showFooter ? 1 : 0};
  svg{
    max-width: 70rem;
    height: 100%;
  }
`
  
  const ContactInfo = Styled.p`
  transition: 250ms;
  opacity: ${props=>props.showFooter ? 1 : 0};
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

const Footer = ({ showFooter }) => (

  <FooterContainer>
    <FooterSVG source={Border} showFooter={showFooter}/>
    <ContactInfo showFooter={showFooter}>
      <span>info@thelumieregroup.com</span>
      <span className="_divider">|</span>
      <span>206.323.9827</span>
      <span className="_divider">|</span>
      <span>Contact</span>
    </ContactInfo>
  </FooterContainer>

)

export default Footer