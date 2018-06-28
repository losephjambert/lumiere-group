import React from 'react'
import Link from 'gatsby-link'
import SVGContainer from '../components/svg-loader'
import Styled from 'styled-components'
import Colors from '../styles/colors'

// Colection Component
// receives a collection of metadata pertaining to a particular subject
// then organizes that metadata in a list
// required:
//    array of collection objects that contain a collection image and collection name

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
  margin: 13.6rem auto 8.4rem;
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
`

const Collection = ({ heading, collectionItems, theme }) => (
<CollectionContainer>
  <CollectionSVGContainer source={heading} className="collection-header" />
  <ul> {/* onClick activate modal and populate it with the metadata from the clicked collection item */}
      <li>item 1</li>
      <li>item 2</li>
      <li>item 2</li>
  </ul>
</CollectionContainer>

)

export default Collection