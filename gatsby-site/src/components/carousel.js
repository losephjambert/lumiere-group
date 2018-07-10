import React from 'react'
import Slider from 'react-slick'
import Styled, {css} from 'styled-components'
import '../styles/slick-carousel/slick.css'
// import '../styles/slick-carousel/slick-theme.css'

const buttonHeight = 5

const StyledCarousel = Styled(Slider)`
position: relative;
  .slick-arrow{
    border: none;
    position: absolute;
    top: calc(50% - ${buttonHeight/2}rem);
    z-index: 1;
    cursor: pointer;
    font-size: 0;
    width: 0;
    height: 0;
    padding: 0;
    background: transparent;
    &:focus{
      outline: none;
    }
  }
  .slick-prev{
    left: 0;
    border-top: ${buttonHeight}rem solid transparent;
    border-bottom: ${buttonHeight}rem solid transparent; 
    
    border-right: ${buttonHeight}rem solid blue; 
  }
  .slick-next{
    right: 0;
    border-top: ${buttonHeight}rem solid transparent;
    border-bottom: ${buttonHeight}rem solid transparent;
    
    border-left: ${buttonHeight}rem solid green;
  }
  .slick-list{
    margin-bottom: -0.4rem;
  }
`

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  className: 'carousel-component'
}

const CarouselComponent = ({ showMenu, showContactOverlay, images }) => (
  <StyledCarousel {...settings}>
    {images.map((image, i) =>
      <div><img src={image.image} key={i} alt={image.altText} /> </div>
    )}
  </StyledCarousel>
)

export default CarouselComponent
