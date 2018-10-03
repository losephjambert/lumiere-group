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


const ServiceItem = ({ toggleModal, heading, servicesData, theme }) => (
  
  <ServiceCollectionContainer id='services'>
    
    <CollectionSVGContainer source={heading} className="collection-header" />
    <ServiceCollectionList>
      {servicesData.map((item, i) =>
        <CollectionItem key={i} id={i}>
          <CollectionItemButton onClick={()=>toggleModal(
              {
                image: null,
                imageDark: item.node.darkImage.file.url,
                title: item.node.title,
                subtitle: null,
                description: item.node.description.description
              },
              theme)}>
            <CollectionItemImage image={item.node.lightImage.file.url}/>
            <CollectionItemTitle>{item.node.title}</CollectionItemTitle>
          </CollectionItemButton>
        </CollectionItem>
      )}
    </ServiceCollectionList>

  </ServiceCollectionContainer>

)

export default ServiceItem