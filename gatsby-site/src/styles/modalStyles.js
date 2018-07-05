import Styled from 'styled-components'
import {hideMenu, showMenu} from './animations'

export const ModalContainer = Styled.div`
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
    opacity: .9;
  }
  &::before{
    background-color: ${props => props.theme.inverse};
    z-index: -1;
  }

  ${props =>
      !props.active ?
      `animation: ${hideMenu} 300ms ease-in-out forwards;`
      :
      `animation: ${showMenu} 300ms ease-in-out forwards;`
    }
`

export const ContentContainer = Styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`

export const ModalItem = Styled.li`
  width: 50%;
  height: 100%;
  flex: 0 1 auto;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0 6.4rem;
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

export const ModalTextList = Styled.ul`
  font-family: Europa Bold;
`

export const ModalTitle = Styled.li`
  font-size: 2.4rem;
  line-height: 3.4rem;
`
      
export const ModalSubTitle = Styled.li`
  font-size: 1.6rem;
`

export const ModalDescription = Styled.li`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-family: Europa Regular;
  max-width: 45rem;
  margin: 2.1rem 0 0;
`

export const ModalImage = Styled.div`
  background-image: ${props => `url(${props.image})`};
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
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