import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import Styled, {injectGlobal} from 'styled-components'
import Media from '../components/mediaQueries'
import Dimensions from '../styles/styleVariables'

import Regular from '../fonts/EuropaRegular.otf'
import Bold from '../fonts/EuropaBold.otf'
import BoldItalic from '../fonts/EuropaBoldItalic.otf'
import Light from '../fonts/EuropaLight.otf'
import LightItalic from '../fonts/EuropaLightItalic.otf'
import RegularItalic from '../fonts/EuropaRegularItalic.otf'

import './index.css'


injectGlobal`
  @font-face {
    font-family: 'Europa Light';
    src: url(${Light});
  }
  @font-face {
    font-family: 'Europa Light Italic';
    src: url(${LightItalic});
  }
  @font-face {
    font-family: 'Europa Regular';
    src: url(${Regular});
  }
  @font-face {
    font-family: 'Europa Regular Italic';
    src: url(${RegularItalic});
  }
  @font-face {
    font-family: 'Europa Bold';
    src: url(${Bold});
  }
  @font-face {
    font-family: 'Europa Bold Italic';
    src: url(${BoldItalic});
  }

  body{
    padding-top: ${Dimensions.headerSpaceSmall};
    ${Media.forMediumPhonesUp`
      padding-top: ${Dimensions.headerSpaceMedium};
    `}
    ${Media.forBigPhonesUp`
      padding-top: ${Dimensions.headerSpaceBig};
    `}
  }
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
    <Footer footerTitle={data.site.siteMetadata.footerTitle} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        footerTitle
      }
    }
  }
`
