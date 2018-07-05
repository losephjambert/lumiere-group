import Styled from 'styled-components'

export const CollectionContainer = Styled.div`
  min-height: 100vh;
  padding: 13.6rem 0;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  background-color: ${props => props.theme.main};
`

export const CollectionList = Styled.ul`
  display: grid;
  grid-template-columns: repeat(${props => props.theme.columns}, 1fr);
  grid-template-rows: auto; 
  grid-column-gap: 6rem;
`

export const CollectionItem = Styled.li`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  color: ${props => props.theme.inverse};
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
  height: ${props => props.theme.size};
  width: ${props => props.theme.size};
  margin: 0 auto 3.2rem;
  transition: inherit;
`

export const CollectionItemTitle = Styled.h3`
  font-family: Europa Bold;
  font-size: 1.6rem;
  color: inherit;
`

export const CollectionItemSubtitle = Styled.h4`
  font-family: Europa Bold;
  font-size: 1.2rem;
  color: inherit;
`