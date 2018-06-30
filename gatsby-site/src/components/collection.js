import React from 'react'
import SVGContainer from '../components/svg-loader'
import Styled from 'styled-components'
import Colors from '../styles/colors'

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
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
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

const CollectionItemButton = Styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  filter: grayscale(1);
  transition: 200ms;
  &:focus{
    outline: none;
  }
  &:hover{
    filter: grayscale(0);
  }
`

const CollectionItemImage = Styled.div`
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center center;
  background-color: ${props => props.theme.backgroundColor};
  background-blend-mode: multiply;
  height: 30rem;
  width: 30rem;
  border-radius: 100%;
`

const CollectionItemTitle = Styled.div`

`

const CollectionItemDescription = Styled.div`

`


const Collection = ({ toggleCollectionItemOverlay, toggleModal, heading, collectionItems, theme }) => (
  
  <CollectionContainer theme={theme}>
    <CollectionSVGContainer source={heading} className="collection-header" />
    <CollectionItemContainer>
      {collectionItems.map((item, i) =>
        <CollectionItem theme={theme} key={i} id={i}>
          <CollectionItemButton onClick={()=>toggleModal(item, theme)}>
            <CollectionItemImage theme={theme} image={item.image}/>
            <CollectionItemTitle>{item.title}</CollectionItemTitle>
            <CollectionItemTitle>{item.subtitle}</CollectionItemTitle>
          </CollectionItemButton>
        </CollectionItem>
      )}
    </CollectionItemContainer>
  </CollectionContainer>

)

export default Collection