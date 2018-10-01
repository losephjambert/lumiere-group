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

// const about = this.props.data.allContentfulSiteInformation.edges[0].node.about.about

class Layout extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    const {
      title,
      seo,
      description
    } = this.props.data.allContentfulSiteInformation.edges[0].node
    
    return(
      <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: seo.join(' ')},
          { name: 'format-detection', content: 'telephone=yes' }
        ]}
      />
        {this.props.children()}
      </div>
    )
  }
}

export default Layout

export const query = graphql`
  query MetadataQuery {
    allContentfulSiteInformation {
      edges {
        node {
          id
          title
          seo
          description
        }
      }
    }
  }
`
