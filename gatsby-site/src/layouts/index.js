import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Styled, {injectGlobal, ThemeProvider} from 'styled-components'
import {Colors} from '../styles/styleVariables'
import '../styles/fonts'
import './index.css'


injectGlobal`
  body{
    background-color: ${Colors.white};
  }

  html{
    overflow-y: initial;
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
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        footerTitle
      }
    }
  }
`
