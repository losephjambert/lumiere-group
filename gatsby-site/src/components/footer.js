import React from 'react'
import Styled, {css} from 'styled-components'
import SVGContainer from '../components/svg-loader'
import Border from '../assets/lumiere-group-with-border.svg'
import {scrollManager, windowManager} from './eventManager'

const FooterContainer = Styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 30% 10% 0;
  z-index: 8;
  opacity: ${props => props.showFooter ? 1 : 0};
  ${props=>props.theme.forTabletPortraitUp`
    padding: 12% 10% 0;
    transform: translate3d(-5px,0,0);
  `}
`

const FooterSVG = Styled(SVGContainer)`
  width: 100%;
  max-width: 55rem;
  display: block;
  margin: auto;
  svg{
    width: inherit;
    margin: auto;
  }
`

const ContactInfo = Styled.p`
max-width: 55rem;
color: ${props=>props.theme.black};
font-size: 1.4rem;
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
font-family: Europa Bold Italic;
text-align: center;
margin: auto;
transform: translate3d(0,-9rem,0);
span{
  margin-bottom: 1.4rem;
}
._divider{
  display: none;
  margin: 0 1rem;
  font-family: Europa Regular;
}
.hoverable:hover{
  color: ${props=>props.theme.hoverColor};
}
${props=>props.theme.forTabletPortraitUp`
  flex-flow: row wrap;
  text-align: initial;
  font-size: 1.8rem;
  margin-top: 0;
  span{
    margin-bottom: 0;
  }
  ._divider{
    display: inline-flex;
  }
`}
`


const Footer = ( {scrolledPastHeight, toggleContactOverlay, dimensions:{scrollHeight, height} } ) => (
  
      <FooterContainer showFooter={scrolledPastHeight} >
        <FooterSVG source={Border} />
        <ContactInfo>
          <span>info@thelumieregroup.com</span>
          <span className="_divider">|</span>
          <span className="hoverable"><a style={ {cursor: 'pointer'} } href='tel:1-206-323-9827'>206.323.9827</a></span>
          <span className="_divider">|</span>
          <span className="hoverable" style={ {cursor: 'pointer'} } onClick={()=>toggleContactOverlay()}>Contact</span>
        </ContactInfo>
      </FooterContainer>

)

export default windowManager(scrollManager(Footer))