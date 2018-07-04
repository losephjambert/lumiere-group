import React from 'react'
import SVGContainer from '../components/svg-loader'
import Styled, {css} from 'styled-components'
import Colors from '../styles/colors'
import CollectionSVGContainer from '../styles/SVGContainer'
import {CollectionContainer, CollectionList, CollectionItem, CollectionItemButton, CollectionItemImage} from '../styles/CollectionItemStyles';

const {
  blueBackground ,
  yellowBackground ,
  hoverColor ,
  white ,
  black
} = Colors

const TeamMemberImage = Styled(CollectionItemImage)`
  border-radius: 100%;
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



const TeamMember = ({ toggleModal, heading, collectionItems, theme }) => (
  
  <CollectionContainer>
    <CollectionSVGContainer source={heading} className="collection-header" />
    <CollectionList>
      {collectionItems.map((item, i) =>
        <CollectionItem key={i} id={i}>
          <CollectionItemButton onClick={()=>toggleModal(item, theme)}>
            <TeamMemberImage image={item.image}/>
            <div>{item.title}</div>
            <div>{item.subtitle}</div>
          </CollectionItemButton>
        </CollectionItem>
      )}
    </CollectionList>
  </CollectionContainer>

)

export default TeamMember