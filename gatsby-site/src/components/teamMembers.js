import React from 'react'
import Styled, {css} from 'styled-components'
import CollectionSVGContainer from '../styles/SVGContainer'
import {
  CollectionContainer,
  CollectionList,
  CollectionItem,
  CollectionItemButton,
  CollectionItemImage,
  CollectionItemTitle,
  CollectionItemSubtitle } from '../styles/CollectionItemStyles';

const TeamMemberCollectionItemButton = Styled(CollectionItemButton)`
  &:hover ${CollectionItemImage}{
    filter: grayscale(0);
  }
`

const TeamMemberImage = Styled(CollectionItemImage)`
  border-radius: 100%;
  background-blend-mode: multiply;
  filter: grayscale(1);
`

const TeamMember = ({ toggleModal, heading, collectionItems, theme }) => (
  
  <CollectionContainer>
    <CollectionSVGContainer source={heading} className="collection-header" />
    <CollectionList>
      {collectionItems.map((item, i) =>
        <CollectionItem key={i} id={i}>
          <TeamMemberCollectionItemButton onClick={()=>toggleModal(item, theme)}>
            <TeamMemberImage image={item.image}/>
            <CollectionItemTitle>{item.title}</CollectionItemTitle>
            <CollectionItemSubtitle>{item.subtitle}</CollectionItemSubtitle>
          </TeamMemberCollectionItemButton>
        </CollectionItem>
      )}
    </CollectionList>
  </CollectionContainer>

)

export default TeamMember