import React from 'react'
import Styled, {css} from 'styled-components'
import {hideMenu, showMenu} from '../styles/animations'
import CloseButton from '../assets/close-button.svg'
import ContactHeader from '../assets/contact.svg'
import Logo from '../assets/header-logo.svg'
import SVGContainer from './svg-loader'


const StyleContainer = Styled.div`
	position: fixed;
	z-index: 30;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: ${props => props.theme.blueBackground};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 0 0 0em;
	transition: transform 300ms ease-in-out;
	transform-origin: center;
	font-family: Europa Bold;
	overflow: auto;
  -ms-overflow-style: none;  // IE 10+
  overflow: -moz-scrollbars-none;  // Firefox
  &::-webkit-scrollbar { 
    display: none;  // Safari and Chrome
  }
	padding: 0 0 1.6rem;
	${props =>
		!props.active ?
		`animation: ${hideMenu} 300ms ease-in-out forwards;` :`animation: ${showMenu} 300ms ease-in-out forwards;`
	}
`

const ContactSVGHeader = Styled(SVGContainer)`
	margin: ${props=>props.theme.headerSpaceBig} 0 3rem;
	svg{
		height: 3.5rem;
		display: inherit;
	}
	${props=>props.theme.forTabletLandscapeUp`
		margin: ${props=>props.theme.headerSpaceBig} 0 0;
		svg{
			height: 4.6rem;
		}
	`}
`

const LogoSVGContainer = Styled(SVGContainer)`
  margin-top: ${props=>props.theme.headerSpaceBig/2};
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    width: 5.6rem;
    g > g > .header-logo-svg{
    fill: ${props => props.theme.black};
    }
  }
`

const StyledSVGContainer = Styled(SVGContainer)`
	width: 2rem;
	position: fixed;
	right: 2.2rem;
	top: 1.9rem;
	cursor: pointer;
	z-index: -100;
	opacity: 0;
	${props=>props.showContactOverlay && css`
		opacity: 1;
		z-index: 60;
	`}
	&:hover{
		svg > g > g > .close-button-elements{
			stroke: ${props => props.theme.hoverColor};
		}
	}
	${props=>props.theme.forTabletLandscapeUp`
		width: 2.4rem;
		right: 3.6rem;
		top: 3rem;
	`}
`

const Label = Styled.label`
	display: block;
	width: 100%;
	margin-bottom: 1rem;
	font-size: 1.8rem;
`

const SharedInputStyles = css`
	display: block;
	background-color: transparent;
	border-radius: 0;
	border: .15rem solid ${props => props.theme.black};
	&:focus{
		outline: none;
	}
`

const Input = Styled.input`
	${SharedInputStyles}
	width: 100%;
	height: 0;
	padding: .4rem;
	height: 3.4rem;
	font-size: 1.4rem;
`
	
const Submit = Styled.input`
	${SharedInputStyles}
	text-transform: uppercase;
	padding: 0.8rem 4.2rem 0.7rem;
	cursor: pointer;
	font-size: 1.6rem;
	&:focus{
		outline: none;
		border-color: ${props => props.theme.hoverColor};
		color: ${props => props.theme.hoverColor};
	}
`

const Textarea = Styled.textarea`
	${SharedInputStyles}
	height: 12rem;
	width: 100%;
	font-size: 1.4rem;
	padding: .4rem;
	${props=>props.theme.forMediumPhonesUp`
		height: 15rem;
	`}
`

const InputContainer = Styled.div`
	margin: 2rem 0;
	width: 100%;
	&:nth-last-of-type(1){ margin-bottom: 0; }
	${props=>props.theme.forMediumPhonesUp`
		margin: 3rem 0;
	`}
	${props=>props.theme.forTabletLandscapeUp`
		margin: 5rem 0;
	`}
`

const Form = Styled.form`
	margin: 0;
	width: 90%;
	max-width: 60.8rem;
	&:nth-last-of-type(1){ margin-bottom: 0; }
	${props=>props.theme.forTabletLandscapeUp`
		margin: 5rem 0;
	`}
`

const Contact = ({ showContactOverlay, toggleContactOverlay }) => (
	<span>
	<span onClick={(e)=>toggleContactOverlay(e)}>
		<StyledSVGContainer source={CloseButton} className='close-button' showContactOverlay={showContactOverlay}/> 
  </span>
	<StyleContainer active={showContactOverlay}>
		{/* <LogoSVGContainer source={Logo} className='contact-logo' /> */}
		<ContactSVGHeader source={ContactHeader} className='contact-header' /> 
		<Form
			action="https://formspree.io/josephc.lambert@gmail.com"
      method="POST">
			<InputContainer>
				<Label htmlFor="name">Name</Label>
				<Input type="text" name="name"/>
			</InputContainer>
			<InputContainer>
				<Label htmlFor="email">Email</Label>
				<Input type="text" name="email"/>
			</InputContainer>
			<InputContainer>
				<Label htmlFor="message">How can we help?</Label>
				<Textarea type="text" name="message" ></Textarea>
			</InputContainer>
			<InputContainer>
				<Submit type="submit" name="submit" value="Send"/>
			</InputContainer>
    </Form>
	</StyleContainer>
	</span>
)

export default Contact