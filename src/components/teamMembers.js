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
  &.LeleBarnett{
    background-size: 150%;
  }
`

const TeamMember = ({ toggleModal, heading, teamMemberData, theme }) => (
  
  <CollectionContainer id='team'>

    <CollectionSVGContainer source={heading} className="collection-header" />
    <CollectionList>
      {teamMemberData.map((item, i) =>
        <CollectionItem key={i} id={i} className={item.node.name.split(' ').join('')}>
          {/* <TeamMemberCollectionItemButton onClick={()=>toggleModal(item.node, theme)}> */}
          <TeamMemberCollectionItemButton onClick={()=>toggleModal(
              {
                image: item.node.image.sizes.src,
                imageDark: null,
                title: item.node.name,
                subtitle: item.node.subtitle,
                description: item.node.description.description
              },
              theme)}>
            <TeamMemberImage className={item.node.name.split(' ').join('')} image={item.node.image.sizes.src}/>
            <CollectionItemTitle>{item.node.name}</CollectionItemTitle>
            <CollectionItemSubtitle>{item.node.title}</CollectionItemSubtitle>
          </TeamMemberCollectionItemButton>
        </CollectionItem>
      )}
    </CollectionList>
  
  </CollectionContainer>

)

export default TeamMember