import React from 'react'
import Styled, {css} from 'styled-components'
import {hideMenu, showMenu} from '../styles/animations'
import CloseButton from '../assets/close-button.svg'
import SVGContainer from '../components/svg-loader'

// Modal Component
// displays modal content for a particular item from a collection
// has button 'X' onClick to fade out and unmount
// required:
//    collection item image
//    collection item name
//    collection item description

const ModalContainer = Styled.div`
      position: fixed;
      top: 0;
      right: 0;
      bottom:0;
      left: 0;
      z-index: 9999;
      color: ${props => props.theme.main};
      &::before,
      &::after{
        content: '';
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: .85;
      }
      &::before{
        background-color: ${props => props.theme.inverse};
        z-index: -1;
      }
      &::after{
        background-color: ${props => props.theme.main};
        z-index: -2;
        opacity: 0;
      }

    ${props =>
        !props.active ?
        `animation: ${hideMenu} 300ms ease-in-out forwards;`
        :
        `animation: ${showMenu} 300ms ease-in-out forwards;`
      }
`

const StyledSVGContainer = Styled(SVGContainer)`
      width: 2.4rem;
      position: absolute;
      z-index: 9999;
      top: 5rem;
      right: 5.8rem;
      cursor: pointer;
      svg > g > g > line.close-button-elements{stroke: ${props => props.theme.main};}
`

const ContentContainer = Styled.ul`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
`

const ModalItem = Styled.li`
      width: 50%;
      height: 100%;
      flex: 0 1 auto;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: flex-start;
      padding: 0 5rem;
      &:nth-of-type(1){
        position: relative;
        &::after{
          content: '';
          position: absolute;
          z-index: 9999;
          top: 25%;
          bottom: 15%;
          right: -.75pt;
          width: 1.5pt;
          background-color: ${props => props.theme.main};
        }
      }
`

const ModalText = Styled.ul`

`

const ModalImage = Styled.div`
      background-image: ${props => `url(${props.image})`};
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      border-radius: 100%;
      margin-left: auto;
      width: 40rem;
      height: 40rem;
      flex: 0 1 auto;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      padding: 0 5rem;
`

const Modal = ({ active, data, toggleModal }) => (
<ModalContainer active={active} theme={data.theme}>
  <span onClick={()=>toggleModal()}>
    <StyledSVGContainer source={CloseButton} className='close-button' theme={data.theme}/> 
  </span>
  <ContentContainer>
    <ModalItem theme={data.theme}>
      <ModalImage image={data.content.image} />
    </ModalItem>
    <ModalItem>
      <ModalText>
        <li>{data.content.title}</li>
        <li>{data.content.description}</li>
      </ModalText>
    </ModalItem>
  </ContentContainer>
</ModalContainer>

)

export default Modal