import Styled, {css} from 'styled-components'
import SVGContainer from '../components/svg-loader'

const LogoSVGContainer = Styled(SVGContainer)`
  ${props => props && css`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: 2rem;
    svg{
      width: ${props.size};
      height: ${props.size};
      g > g > .cls-1{
        fill: ${props.theme.main};
      }
    }
  `}
`

export default LogoSVGContainer