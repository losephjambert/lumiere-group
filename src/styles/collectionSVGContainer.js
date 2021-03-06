import Styled from 'styled-components'
import SVGContainer from '../components/svg-loader'

const CollectionSVGContainer = Styled(SVGContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  margin: 0 0 8.4rem;
  svg{
    height: 3.5rem;
  }
  ${props=>props.theme.forTabletLandscapeUp`
    margin-bottom: 10.4rem;
    svg{
      height: 4.6rem;
    }
  `}
`

export default CollectionSVGContainer