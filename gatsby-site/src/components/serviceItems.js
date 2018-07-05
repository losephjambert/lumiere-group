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
  min-height: auto;
  margin-bottom: 100vh;
`


const ServiceItem = ({ toggleModal, heading, collectionItems, theme }) => (
  
  <ServiceCollectionContainer>
    <CollectionSVGContainer source={heading} className="collection-header" />
    <CollectionList>
      {collectionItems.map((item, i) =>
        <CollectionItem key={i} id={i}>
          <CollectionItemButton onClick={()=>toggleModal(item, theme)}>
            <CollectionItemImage image={item.image}/>
            <CollectionItemTitle>{item.title}</CollectionItemTitle>
            <CollectionItemSubtitle>{item.subtitle}</CollectionItemSubtitle>
          </CollectionItemButton>
        </CollectionItem>
      )}
    </CollectionList>
  </ServiceCollectionContainer>

)

export default ServiceItem