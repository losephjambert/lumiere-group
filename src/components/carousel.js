import React from 'react'
import Slider from 'react-slick'
import Styled, {css} from 'styled-components'
import '../styles/slick-carousel/slick.css'

const buttonHeight = 2.5

const StyledCarousel = Styled(Slider)`
position: relative;
  .slick-arrow{
    background: transparent;
    border: none;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    font-size: 0;
    padding: 0;
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
      margin-left: -50px;
      transform: translateX(-50px);
      border-top: ${buttonHeight}rem solid transparent;
      border-bottom: ${buttonHeight}rem solid transparent; 
      
      border-right: ${buttonHeight}rem solid ${props=>props.theme.white};
      ${props=>props.theme.forTabletLandscapeUp`
        margin-left: 0px;
        border-right: ${buttonHeight*2}rem solid ${props=>props.theme.white};
      `}
    }
  }
  .slick-next{
    right: 0;
    &::after{
      margin-right: -50px;
      border-top: ${buttonHeight}rem solid transparent;
      border-bottom: ${buttonHeight}rem solid transparent;
      
      border-left: ${buttonHeight}rem solid ${props=>props.theme.white};
      ${props=>props.theme.forTabletLandscapeUp`
        margin-right: 0px;
        border-left: ${buttonHeight*2}rem solid ${props=>props.theme.white};
      `}
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

const CarouselComponent = ({ images }) => (
  <StyledCarousel {...settings}>
    {images.map((image, i) =>
      <img
        key={i}
        srcSet={
          image.sizes.srcSet
        }
        sizes={
          image.sizes.sizes
        }
        src={image.sizes.src}
        alt={image.title} />
    )}
  </StyledCarousel>
)

export default CarouselComponent
