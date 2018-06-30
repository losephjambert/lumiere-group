import React from 'react'
import SVGContainer from '../components/svg-loader'
import Styled from 'styled-components'
import Colors from '../styles/colors'
import Modal from './modal'

// Colection Component
// receives a collection of metadata pertaining to a particular subject
// then organizes that metadata in a list
// required:
//    array of collection objects that contain image, title, subtitle, and description

const {
  blueBackground ,
  yellowBackground ,
  hoverColor ,
  white ,
  black
} = Colors

const CollectionSVGContainer = Styled(SVGContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13.6rem 0 8.4rem;
  svg{
    height: 4.6rem;
    .services-svg,
    .about-svg{
      fill: ${black};
    }
  }
`
  
const CollectionContainer = Styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor}
  color: ${props => props.theme.color}
`

const CollectionItemContainer = Styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto; 
  grid-column-gap: 6rem;
`

const CollectionItem = Styled.li`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

const CollectionItemImage = Styled.button`
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center center;
  height: 30rem;
  width: 30rem;
  border-radius: 100%;
  filter: grayscale(1);
  mix-blend-mode: multiply;
  cursor: pointer;
  transition: 200ms;
  border: none;
  &:focus{
    outline: none;
    filter: grayscale(0);
  }
  &:hover{
    filter: grayscale(0);
  }
`

const CollectionItemTitle = Styled.div`

`

const CollectionItemDescription = Styled.div`

`


const Collection = ({ toggleCollectionItemOverlay, showCollectionItemOverlay, heading, collectionItems, theme }) => (
  
  <CollectionContainer theme={theme}>
    <CollectionSVGContainer source={heading} className="collection-header" />
    <CollectionItemContainer> {/* onClick activate modal and populate it with the metadata from the clicked collection item */}
      {collectionItems.map((item, i) =>
        <CollectionItem theme={theme} key={i} id={i}>
          <CollectionItemImage image={item.image}  onClick={(e)=>toggleCollectionItemOverlay(e)}/>
          <CollectionItemTitle>{item.title}</CollectionItemTitle>
          <CollectionItemTitle>{item.description}</CollectionItemTitle>
        </CollectionItem>
      )}
    </CollectionItemContainer>
  </CollectionContainer>

)

export default Collection