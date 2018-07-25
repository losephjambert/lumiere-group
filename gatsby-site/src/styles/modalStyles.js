import Styled from 'styled-components'
import {hideMenu, showMenu} from './animations'

export const ModalContainer = Styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom:0;
  left: 0;
  z-index: 9999;
  color: ${props => props.localTheme.main};
  &::before,
  &::after{
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: .95;
  }
  &::before{
    background-color: ${props => props.localTheme.inverse};
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
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  padding: 7rem 1.6rem 0;
  overflow: auto;
  -ms-overflow-style: none;  // IE 10+
  overflow: -moz-scrollbars-none;  // Firefox
  &::-webkit-scrollbar { 
    display: none;  // Safari and Chrome
  }
  ${props=>props.theme.forTabletLandscapeUp`
    padding: 0;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  `}
  `
  
  export const ModalItem = Styled.li`
    width: 100%;
    ${props=>props.theme.forTabletLandscapeUp`
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
        top: 20%;
        bottom: 15%;
        right: -.75pt;
        width: 1.5pt;
        background-color: ${props => props.localTheme.main};
      }
    }
  `}
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
  margin: auto;
  flex: 0 1 auto;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  ${props=>props.theme.forMediumPhonesUp`
    width: 24rem;
    height: 24rem;
  `}
  ${props=>props.theme.forTabletLandscapeUp`
    margin: 0 0 0 auto;
    width: 40rem;
    height: 40rem;
    padding: 0 5rem;
  `}
`