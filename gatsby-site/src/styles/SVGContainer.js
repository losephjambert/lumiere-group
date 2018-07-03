import Styled from 'styled-components'
import SVGContainer from '../components/svg-loader'
import Colors from './colors'

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
  margin: 0 0 8.4rem;
  svg{
    height: 4.6rem;
  }  
  svg > .services-svg,
  svg > .about-svg{
    fill: ${black};
  }
`

export default CollectionSVGContainer