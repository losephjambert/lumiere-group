import React from 'react'
import Styled, {css} from 'styled-components'
import CollectionSVGContainer from '../styles/SVGContainer'
      
const CollectionContainer = Styled.div`
      min-height: 100vh;
      padding: 13.6rem 0;
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      background-color: ${props => props.theme.main};
`

const CollectionItemContainer = Styled.ul`
      display: grid;
      grid-template-columns: repeat(${props => props.theme.columns}, 1fr);
      grid-template-rows: auto; 
      grid-column-gap: 6rem;
`

const CollectionItem = Styled.li`
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      color: ${props => props.theme.inverse};
      transition: 200ms;
      &:hover{
        color: ${props=>props.theme.hoverColor};
      }
`

const CollectionItemButton = Styled.button`
      border: none;
      background-color: transparent;
      cursor: pointer;
      color: inherit;
      &:focus{
        outline: none;
      }
      `
      
      const CollectionItemImage = Styled.div`
      background-image: ${props => `url(${props.image})`};
      background-size: cover;
      background-position: center center;
      background-color: ${props => props.theme.main};
      background-repeat: no-repeat;
      ${props => props.theme.blend && 'background-blend-mode: multiply;'}
      transition: 200ms;
      height: ${props => props.theme.size};
      width: ${props => props.theme.size};
      border-radius: 100%;
      margin: 0 auto 3.2rem;
      filter: grayscale(1);
      &:hover{
        filter: grayscale(0);
      }
`

const CollectionItemTitle = Styled.p`
      font-family: Europa Bold;
      font-size: 1.6rem;
      color: inherit;
      transition: 200ms;
      `
      
      const CollectionItemSubtitle = Styled.p`
      font-family: Europa Bold;
      font-size: 1.2rem;
      color: inherit;
      transition: 200ms;
      
`

const CollectionItemDescription = Styled.div`

`


const ServiceItem = ({ toggleModal, heading, collectionItems, theme }) => (
  
  <CollectionContainer>
    <CollectionSVGContainer source={heading} className="collection-header" />
    <CollectionItemContainer>
      {collectionItems.map((item, i) =>
        <CollectionItem key={i} id={i}>
          <CollectionItemButton onClick={()=>toggleModal(item, theme)}>
            <CollectionItemImage image={item.image}/>
            <CollectionItemTitle>{item.title}</CollectionItemTitle>
            <CollectionItemSubtitle>{item.subtitle}</CollectionItemSubtitle>
          </CollectionItemButton>
        </CollectionItem>
      )}
    </CollectionItemContainer>
  </CollectionContainer>

)

export default ServiceItem