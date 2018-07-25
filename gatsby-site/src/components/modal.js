import React from 'react'
import Styled, {css} from 'styled-components'
import Logo from '../assets/header-logo.svg'
import LogoSVGContainer from '../styles/logoSVGContainer'
import CloseButton from './closeButton'
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
  background-size: 21rem;
  ${props=>props.theme.forTabletLandscapeUp`
    background-size: 32rem;
  `}
`

const TeamMemberModalImage = Styled(ModalImage)`
  background-size: cover;
  border-radius: 100%;
`

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

<ModalContainer active={active} localTheme={data.theme} onKeyUp={(e)=>handleKeyPress(e)}>
  <LogoSVGContainer source={Logo} localTheme={data.theme} size={{small:'3.6rem', large: '5.6rem'}}/>
  {active && <span onClick={ (e) => toggleModal(e) }> <CloseButton localTheme={data.theme} /> </span> }
  <ContentContainer>
    <ModalItem localTheme={data.theme}>
      {data.theme.type === 'team' &&  <TeamMemberModalImage image={image} />}
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

)

export default Modal