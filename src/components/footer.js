import React from 'react'
import Styled, {css} from 'styled-components'
import SVGContainer from '../components/svg-loader'
import Border from '../assets/lumiere-group-with-border.svg'
import {scrollManager, windowManager} from './eventManager'
import formatPhoneNumber from '../scripts/formatPhoneNumber'

const Container = Styled.div`
  position: fixed;
  top: ${props=>props.theme.headerSpaceSmall};
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 8;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.showFooter ? 1 : 0};
  ${props=>props.theme.forTabletPortraitUp`
    transform: translate3d(-5px,0,0);
    top: ${props=>props.theme.headerSpaceBig};
  `}
`

const FooterSVG = Styled(SVGContainer)`
  width: 85%;
  height: auto;
  max-width: 55rem;
  display: block;
  margin: 0 auto 5rem;
  svg{
    height: inherit;
    width: 100%;
  }
  ${props=>props.theme.forTabletPortraitUp`
    width: 90%
  `}
  ${props=>props.theme.forTabletLandscapeUp`
    width: 100%
  `}
`

const Contact = Styled.p`
  font-family: Europa Bold Italic;
  text-align: center;
  font-size: 1.4rem;
  color: ${props=>props.theme.black};
  ${props=>props.theme.forTabletPortraitUp`
    font-size: 1.8rem;
  `}
`

const Span = Styled.span`
  display: block;
  margin-bottom: 1.2rem;
  ${props=>props.theme.forTabletPortraitUp`
    display: inline-block;
  `}
`

const Divider = Styled.span`
  display: none;
  font-family: Europa Regular;
  ${props=>props.theme.forTabletPortraitUp`
    display: initial;
    padding: 0 1rem;
  `}

`

const HoverSpan = Styled(Span)`
  cursor: pointer;
  &:hover{
    color: ${props=>props.theme.hoverColor};
  }
`

const Footer = ( {scrolledPastHeight, toggleContactOverlay, contactInformation:{contactEmail, phoneNumber} } ) => (
  <footer>
    <Container showFooter={scrolledPastHeight} >
      <FooterSVG source={Border} />
      <Contact>
        <Span>{contactEmail}</Span>
        <Divider>|</Divider>
        <HoverSpan><a href={`tel:${formatPhoneNumber(phoneNumber,'TEL')}`}>{formatPhoneNumber(phoneNumber,'DOT')}</a></HoverSpan>
        <Divider>|</Divider>
        <HoverSpan onClick={()=>toggleContactOverlay()}>Contact</HoverSpan>
      </Contact>
    </Container>
  </footer>
)

export default windowManager(scrollManager(Footer))
