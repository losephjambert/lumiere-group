import React from 'react'
import SVGContainer from '../components/svg-loader'
import AboutHeader from '../assets/about.svg'
import Styled from 'styled-components'

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
  background-color: ${props => props.theme.blueBackground};
  display: flex;
  flex-flow: column wrap;
  align-items: center;
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

const About = ({ /*About Metadata*/ }) => (
<div>
    <StyledSection>
      <HeaderSVGContainer source={AboutHeader} className='about-header' />
      <BodyCopy>
        Our mission is to strive towards superior levels of efficiency and sustainability within the operational domain of Lumiere Group with respect to the changing financial environment. We introduce new management approaches supported by the unrivalled experience of our professional team. Our target is to consolidate Lumiere Group as one of the leaders in each industry we are involved in. Our focus is to maximize the Group’s capital growth by setting the highest standards of management and best practice procedures in business process flows. Our expert team is committed to creating success by making efficient investment decisions and launching new sustainable projects.
      </BodyCopy>
    </StyledSection>
</div>

)

export default About