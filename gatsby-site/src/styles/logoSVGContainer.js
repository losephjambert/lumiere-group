import Styled, {css} from 'styled-components'
import SVGContainer from '../components/svg-loader'

const LogoSVGContainer = Styled(SVGContainer)`
  ${props => props && css`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: 1.2rem;
    svg{
      width: ${props.size.small};
      height: ${props.size.small};
      g > g > .header-logo-svg{
        fill: ${props.localTheme.main};
      }
    }
    ${props=>props.theme.forTabletLandscapeUp`
      top: 1.6rem;
      svg{
        width: ${props.size.large};
        height: ${props.size.large};
        g > g > .header-logo-svg{
          fill: ${props.theme.main};
        }
      }
    `}
  `}
`

export default LogoSVGContainer
