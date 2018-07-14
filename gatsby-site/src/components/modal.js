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
  width: 1.8rem;
  position: absolute;
  z-index: 9999;
  top: 2.2rem;
  right: 2.2rem;
  cursor: pointer;
  svg > g > g > line.close-button-elements{stroke: ${props => props.localTheme.main};}
  ${props=>props.theme.forTabletLandscapeUp`
    width: 2.4rem;
    top: 3rem;
    right: 5.8rem;
  `}
`

const ServicesModalImage = Styled(ModalImage)`
  filter: brightness(0);
  ${props=>props.theme.forTabletLandscapeUp`
    background-size: 30rem;
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
  <span onClick={()=>toggleModal()}>
    <CloseButton source={CloseButtonSVG} className='close-button' localTheme={data.theme}/> 
  </span>
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