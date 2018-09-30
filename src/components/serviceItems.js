import React from 'react'
import Styled, {css} from 'styled-components'
import CollectionSVGContainer from '../styles/collectionSVGContainer'
import {
  CollectionContainer,
  CollectionList,
  CollectionItem,
  CollectionItemButton,
  CollectionItemImage,
  CollectionItemTitle,
  CollectionItemSubtitle } from '../styles/collectionItemStyles'

const ServiceCollectionContainer = Styled(CollectionContainer)`
  margin-bottom: 100vh;
`

const ServiceCollectionList = Styled(CollectionList)`
  grid-column-gap: 6rem;
`


const ServiceItem = ({ toggleModal, heading, collectionItems, theme }) => (
  
  <ServiceCollectionContainer id='services'>
    <CollectionSVGContainer source={heading} className="collection-header" />
    <ServiceCollectionList>
      {collectionItems.map((item, i) =>
        <CollectionItem key={i} id={i}>
          <CollectionItemButton onClick={()=>toggleModal(item, theme)}>
            <CollectionItemImage image={item.image}/>
            <CollectionItemTitle>{item.title}</CollectionItemTitle>
            <CollectionItemSubtitle>{item.subtitle}</CollectionItemSubtitle>
          </CollectionItemButton>
        </CollectionItem>
      )}
    </ServiceCollectionList>
  </ServiceCollectionContainer>

)

export default ServiceItem