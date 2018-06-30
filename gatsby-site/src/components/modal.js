import React from 'react'
import Styled from 'styled-components'
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
    left: 0;
    z-index: 9999;
    width: 30rem;
    height: 30rem;
    background-color: salmon;
    
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
	top: 2.25rem;
	left: 5.8rem;
	cursor: pointer;
	background-color: salmon;
`

const Modal = ({ active, data, toggleModal }) => (
<ModalContainer active={active}>
  <span onClick={()=>toggleModal()}>
    <StyledSVGContainer source={CloseButton} className='close-button'/> 
  </span>
  <ul>
    <li>
      <img src={data.image}/>
    </li>
    <li>{data.title}</li>
    <li>{data.description}</li>
  </ul>
</ModalContainer>

)

export default Modal