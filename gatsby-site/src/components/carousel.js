import React from 'react'
import Slider from 'react-slick'
import Styled, {css} from 'styled-components'
import '../styles/slick-carousel/slick.css'
// import '../styles/slick-carousel/slick-theme.css'

const buttonHeight = 2.5

const StyledCarousel = Styled(Slider)`
position: relative;
  .slick-arrow{
    border: none;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    font-size: 0;
    padding: 0;
    background: transparent;
    height: 100%;
    width: 100px;
    top: 0;
    opacity: 1;
    cursor: auto;
    &::after{
      content: '';
      top: calc(50% - ${buttonHeight/2}rem);
      opacity: 0;
      transition: 250ms;
    }
    &:hover{
      &::after{
        opacity: 1;
        cursor: pointer;
      }
    }
    &:focus{
      outline: none;
    }
  }
  .slick-prev{
    left: 0;
    &::after{
      border-top: ${buttonHeight}rem solid transparent;
      border-bottom: ${buttonHeight}rem solid transparent; 
      
      border-right: ${buttonHeight*2}rem solid ${props=>props.theme.white};
    }
  }
  .slick-next{
    right: 0;
    &::after{
      border-top: ${buttonHeight}rem solid transparent;
      border-bottom: ${buttonHeight}rem solid transparent;
      
      border-left: ${buttonHeight*2}rem solid ${props=>props.theme.white};
    }
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
  autoplay: true
}

const CarouselComponent = ({ showMenu, showContactOverlay, images }) => (
  <StyledCarousel {...settings}>
    {images.map((image, i) =>
      <img
        key={i}
        srcSet={
          `${image.default.path} 4487w,
           ${image.large.path} 5616w`
        }
        sizes={
          `(max-width: 900px) 400px, 901px`
        }
        src={image.default.path}
        alt={image.default.altText} />
    )}
  </StyledCarousel>
)

export default CarouselComponent
