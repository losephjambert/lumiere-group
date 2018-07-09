import Styled, {css} from 'styled-components'
import SVGContainer from '../components/svg-loader'

const LogoSVGContainer = Styled(SVGContainer)`
  ${props => props && css`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 2rem;
    svg{
      width: ${props.size};
      height: ${props.size};
      g > g > .header-logo-svg{
        fill: ${props.theme.main ? props.theme.main : props.theme.black};
      }
    }
  `}
  ${props => props.show && css`
    opacity: 1;
  `}
`

export default LogoSVGContainer