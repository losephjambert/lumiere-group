import React from 'react'
import Carousel from 'nuka-carousel'
import Styled, {css} from 'styled-components'

const ControlSize = 2.5
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
  border-right: ${ControlSize*2}rem solid ${props => props.theme.white};
  transform: translate3d(${ControlPadding}rem,0,0);
`

const NextSlideControl = Styled.span`
  ${SharedSliderControlStyles}
  border-left: ${ControlSize*2}rem solid ${props => props.theme.white};
  transform: translate3d(-${ControlPadding}rem,0,0);
`

const StyledCarousel = Styled(Carousel)`
  ${props=>
    props.showMenu || props.showContactOverlay && css`
      z-index: -10;
    `}
  &:hover ${PreviousSlideControl},
  &:hover ${NextSlideControl}  {
    opacity: 1;
  }
`

const CarouselComponent = ({ showMenu, showContactOverlay, images }) => (
  <StyledCarousel
    showContactOverlay={showContactOverlay}
    showMenu={showMenu}
    wrapAround={true}
    autoplay={true}
    autoplayInterval={5000}
    speed={500}
    heightMode={'first'}
    renderBottomCenterControls={ () => false }
    renderCenterLeftControls={({ previousSlide }) => (
      <PreviousSlideControl onClick={previousSlide} />
    )}
    renderCenterRightControls={({ nextSlide }) => (
      <NextSlideControl onClick={nextSlide} />
    )}>
    {images.map((image, i) =>
      <img src={image.image} key={i} alt={image.altText} />
    )}
  </StyledCarousel>
)

export default CarouselComponent
