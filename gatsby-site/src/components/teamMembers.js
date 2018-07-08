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
  CollectionItemSubtitle } from '../styles/collectionItemStyles';

const TeamMemberCollectionItemButton = Styled(CollectionItemButton)`
  &:hover ${CollectionItemImage}{
    filter: grayscale(0);
    background-blend-mode: unset;
  }
`

const TeamMemberImage = Styled(CollectionItemImage)`
  border-radius: 100%;
  background-blend-mode: multiply;
  mix-blend-mode: multiply;
  background-size: cover;
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