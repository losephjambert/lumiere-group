import React from 'react'
import SVGContainer from '../components/svg-loader'
import AboutHeader from '../assets/about.svg'
import Styled from 'styled-components'
import {windowManager} from './eventManager'

const HeaderSVGContainer = Styled(SVGContainer)`
  margin: 0 0 4.2rem 0;
  display: block;
  height: 3.5rem;
  svg{
    height: inherit;
    margin: 0 auto;
    display: block;
  }
  ${props=>props.theme.forTabletLandscapeUp`
    height: 4.6rem;
    margin: 0 0 8.4rem 0;
  `}
  `
  
  const StyledSection = Styled.section`
  padding: 7.6rem 1.6rem;
  margin: ${props=>props.spacer}px 0 0 0;
  background-color: ${props => props.theme.blueBackground};
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  min-height: ${props=>props.height - 200}px;
  ${props=>props.theme.forTabletLandscapeUp`
    padding: 13.6rem 0;
  `}
  `
  
  const BodyCopy = Styled.p`
  font-family: Europa Bold;
  text-align: center;
  font-size: 1.4rem;
  line-height: 2.2rem;
  max-width: 100rem;
  margin: 0;
  ${props=>props.theme.forTabletLandscapeUp`
    font-size: 2.4rem;
    padding: 0 5rem;
    line-height: 3.6rem;
  `}
`

const About = ({initialHeight, dimensions:{height}}) => (
<div>
    <StyledSection id='about' spacer={initialHeight} height={height}>
      <HeaderSVGContainer source={AboutHeader} className='about-header'/>
      <BodyCopy>
      The Lumiere Group offers consulting services including: art advising, art collection management, art lifecycle oversight, and long-term planning. Our team is up-to-date on contemporary artists and galleries throughout the United States and Canada. Additionally, we have extensive collection management and registration experience, maintaining the highest industry standards. With clients as varied as emerging private collectors to one of the largest contemporary art collections in the United States, our team of eight full-time arts professionals has gained unparalleled experience in the intricacies of art consulting. 
      </BodyCopy>
    </StyledSection>
</div>

)

export default windowManager(About)