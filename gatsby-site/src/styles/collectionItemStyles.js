import Styled, {css} from 'styled-components'

export const CollectionContainer = Styled.div`
  min-height: 100vh;
  padding: 13.6rem 0;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  background-color: ${props => props.theme.main};
`

export const CollectionList = Styled.ul`
  grid-template-columns: repeat(1, 1fr);
  display: grid;
  grid-template-rows: auto; 
  grid-column-gap: 6rem;
  ${props=>props.theme.forTabletLandscapeUp`
    grid-template-columns: repeat(${props => props.theme.columns}, 1fr);
  `}
  `

export const CollectionItem = Styled.li`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  &:not(:last-of-type){
    margin-bottom: 7rem;
  }
  color: ${props => props.theme.inverse};
  ${props=>props.theme.forTabletLandscapeUp`
    margin-bottom: 0;
  `}
  `
  
export const CollectionItemButton = Styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: inherit;
  transition: ${props => props.theme.transition};
  &:focus{
    outline: none;
  }
  &:hover{
    color: ${props=>props.theme.hoverColor};
  }
  `
  
export const CollectionItemImage = Styled.div`
  background-image: ${props => `url(${props.image})`};
  background-position: center center;
  background-color: ${props => props.theme.main};
  background-repeat: no-repeat;
  height: ${props => props.theme.smallPhoneSize};
  width: ${props => props.theme.smallPhoneSize};
  margin: 0 auto 2.2rem;
  transition: inherit;
  ${props=>props.theme.forTabletLandscapeUp`
    margin: 0 auto 3.2rem;
    height: ${props => props.theme.defaultSize};
    width: ${props => props.theme.defaultSize};
  `}
`

export const CollectionItemTitle = Styled.h3`
  font-family: Europa Bold;
  font-size: 1.6rem;
  line-height: 2.3rem;
  color: inherit;
  margin: 0 auto .75rem;
  max-width: 20rem;
  text-align: center;
  ${props=>props.theme.forTabletLandscapeUp`
    width: auto;
    margin: intial;
    line-height: initial;
  `}
`

export const CollectionItemSubtitle = Styled.h4`
  font-family: Europa Bold;
  font-size: 1.2rem;
  color: inherit;
`