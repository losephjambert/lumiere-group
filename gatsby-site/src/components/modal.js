import React from 'react'
import Styled, {css} from 'styled-components'
import Logo from '../assets/header-logo.svg'
import LogoSVGContainer from '../styles/logoSVGContainer'
import CloseButton from './closeButton'
import Transition from 'react-transition-group/Transition';

import {
  ModalContainer,
  ContentContainer,
  ModalItem,
  ModalTextList,
  ModalTitle,
  ModalSubTitle,
  ModalDescription,
  ModalImage
} from '../styles/modalStyles'

const ServicesModalImage = Styled(ModalImage)`
  filter: brightness(0);
  background-size: 19rem;
  ${props=>props.theme.forTabletLandscapeUp`
    background-size: 28rem;
  `}
`

const TeamMemberModalImage = Styled(ModalImage)`
  background-size: 100%;
  border-radius: 100%;
  &.LeleBarnett{
    background-size: 130%;
  }
`

const duration = 300
const timeout = 100

const defaultStyle = {
  transition: `opacity ${duration}ms linear`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
}

const Modal = ({
  active,
  toggleModal,
  data,
  data: {
    content: {
      image,
      title,
      subtitle,
      description
    }
  }
}) => (
  <Transition
    in={active}
    timeout={timeout}
    unmountOnExit>
    {(state) => (
    <ModalContainer active={active} localTheme={data.theme} onKeyUp={(e)=>handleKeyPress(e)} style={{...defaultStyle, ...transitionStyles[state]}}>
      <LogoSVGContainer source={Logo} localTheme={data.theme} size={{small:'3.6rem', large: '5.6rem'}}/>
      {<span onClick={ (e) => toggleModal(e) }> <CloseButton localTheme={data.theme} /> </span> }
      <ContentContainer>
        <ModalItem localTheme={data.theme}>
          {data.theme.type === 'team' &&  <TeamMemberModalImage className={title.split(' ').join('')} image={image} />}
          {data.theme.type === 'services' &&  <ServicesModalImage image={image} />}
        </ModalItem>
        <ModalItem localTheme={data.theme}>
          <ModalTextList>
            { title && <ModalTitle>{title}</ModalTitle> }
            { subtitle && <ModalSubTitle>{subtitle}</ModalSubTitle> }
            { description && <ModalDescription>{description}</ModalDescription> }
          </ModalTextList>
        </ModalItem>
      </ContentContainer>
    </ModalContainer>
    )}
  </Transition>
)

export default Modal