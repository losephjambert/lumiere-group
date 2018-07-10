import React from 'react'
import Styled, {css} from 'styled-components'
import CloseButtonSVG from '../assets/close-button.svg'
import SVGContainer from '../components/svg-loader'
import Logo from '../assets/header-logo.svg'
import LogoSVGContainer from '../styles/logoSVGContainer'

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

const CloseButton = Styled(SVGContainer)`
  width: 2.4rem;
  position: absolute;
  z-index: 9999;
  top: 3rem;
  right: 5.8rem;
  cursor: pointer;
  svg > g > g > line.close-button-elements{stroke: ${props => props.theme.main};}
`

const ServicesModalImage = Styled(ModalImage)`
  mix-blend-mode: difference;
  background-size: 30rem;
`

const TeamMemberModalImage = Styled(ModalImage)`
  background-size: cover;
  border-radius: 100%;
`

const Modal = ({
  active,
  toggleModal,
  data: {
    theme,
    content: {
      image,
      title,
      subtitle,
      description
    }
  }
}) => (

<ModalContainer active={active} theme={theme} onKeyUp={(e)=>handleKeyPress(e)}>
  <LogoSVGContainer source={Logo} theme={theme} size={'5.6rem'}/>
  <span onClick={()=>toggleModal()}>
    <CloseButton source={CloseButtonSVG} className='close-button' theme={theme}/> 
  </span>
  <ContentContainer>
    <ModalItem theme={theme}>
      {theme.type === 'team' &&  <TeamMemberModalImage image={image} />}
      {theme.type === 'services' &&  <ServicesModalImage image={image} />}
    </ModalItem>
    <ModalItem>
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