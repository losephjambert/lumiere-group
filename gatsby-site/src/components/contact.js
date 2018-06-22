import React from 'react'
import Link from 'gatsby-link'
import Styled, {css} from 'styled-components'
import Colors from '../styles/colors'
import {hideMenu, showMenu} from '../styles/animations'
import SVGContainer from '../components/svg-loader'
import CloseButton from '../artwork/close-button.svg'

// Contact Component
// displays a contact form users can interact with to send a message to the company
// form submit onClick sends email to company
// has 'X' onClick to close

const {
    blueBackground ,
    yellowBackground ,
    hoverColor ,
    white ,
    black
  } = Colors

const StyleContainer = Styled.div`
position: fixed;
z-index: 99;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: ${blueBackground};
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 0 0 0em;

transition: transform 300ms ease-in-out;
transform-origin: center;
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
	z-index: 99;
	right: 2.4rem;
	top: 3.1rem;
`

const Contact = ({ active, toggleContactOverlay }) => (
<StyleContainer active={active}>
	<span onClick={(e)=>toggleContactOverlay(e)}>
		<StyledSVGContainer source={CloseButton} className='close-button' /> 
  </span>  
		<form action="">
        <input type="text"/>
        <input type="text"/>
        <textarea name="message" cols="30" rows="10"></textarea>
        <input type="submit"/>
    </form>
</StyleContainer>

)

export default Contact