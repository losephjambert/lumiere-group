import React from 'react'
import Link from 'gatsby-link'
import Carousel from 'nuka-carousel'
import Styled, {css} from 'styled-components'
import Colors from '../styles/colors'


// Landing Component
// displays landing page content
// displays logo component inside it

const {
  blueBackground ,
  yellowBackground ,
  hoverColor ,
  white ,
  black
} = Colors

const ControlSize = 3.5
const ControlPadding = 1

const SharedSliderControlStyles = `
  display: block;
  width: 0; 
  height: 0; 
  border-top: ${ControlSize}rem solid transparent;
  border-bottom: ${ControlSize}rem solid transparent;
  transition: 250ms;
  opacity: 0;
  cursor: pointer;
`

const PreviousSlideControl = Styled.span`
  ${SharedSliderControlStyles}
  border-right: ${ControlSize}rem solid ${white};
  transform: translate3d(${ControlPadding}rem,0,0);
`

const NextSlideControl = Styled.span`
  ${SharedSliderControlStyles}
  border-left: ${ControlSize}rem solid ${white};
  transform: translate3d(-${ControlPadding}rem,0,0);
`

const StyledCarousel = Styled(Carousel)`
  ${props=>
    props.showMenu && css`
      z-index: -10;
    `}
  ${props=>
    props.showContactOverlay && css`
      z-index: -10;
    `}
  &:hover ${PreviousSlideControl},
  &:hover ${NextSlideControl}  {
    opacity: 1;
  }
`

const CarouselComponent = ({ showMenu, showContactOverlay }) => (
  <StyledCarousel
    showContactOverlay={showContactOverlay}
    showMenu={showMenu}
    wrapAround={true}
    autoplay={true}
    autoplayInterval={5000}
    speed={500}
    renderBottomCenterControls={false}
    renderCenterLeftControls={({ previousSlide }) => (
      <PreviousSlideControl onClick={previousSlide} />
    )}
    renderCenterRightControls={({ nextSlide }) => (
      <NextSlideControl onClick={nextSlide} />
    )}>
    <img src="http://fillmurray.com/1000/600&text=slide1" />
    <img src="http://fillmurray.com/1000/600&text=slide2" />
    <img src="http://fillmurray.com/1000/600&text=slide3" />
    <img src="http://fillmurray.com/1000/600&text=slide4" />
    <img src="http://fillmurray.com/1000/600&text=slide5" />
    <img src="http://fillmurray.com/1000/600&text=slide6" />
    <img src="http://fillmurray.com/1000/600&text=slide7" />
  </StyledCarousel>
)

export default CarouselComponent
