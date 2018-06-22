import React from 'react'
import Link from 'gatsby-link'
import Styled, {css} from 'styled-components'
import Colors from '../styles/colors'
import {hideMenu, showMenu} from '../styles/animations'

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
z-index: 100;
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

const Contact = ({ active }) => (
<StyleContainer active={active}>
    <form action="">
        <input type="text"/>
        <input type="text"/>
        <input type="textarea"/>
        <input type="submit"/>
    </form>
</StyleContainer>

)

export default Contact