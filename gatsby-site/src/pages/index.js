import React from 'react'
import Link from 'gatsby-link'

import Carousel from '../components/carousel'
import Header from '../components/header'
import Footer from '../components/footer'

const Profile = ({data}) => (
  <div>
    <Menu/>
    <h1>Get up now get down.</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      <div>{data.name}</div>
      <div> <img src={data.profilePhoto.resolutions.src} alt="Profile Photo" /> </div>
      <div>{data.profileDescription.profileDescription}</div>
    </div>
    <Carousel/>
  </div>
)


class IndexPage extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showContactOverlay: false
    }
  }

  toggleMenu = (e) => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }))
  }

  toggleContactOverlay = (e) => {
    this.setState(prevState => ({
      showContactOverlay: !prevState.showContactOverlay
    }))
    console.log('toggle contact overlay')
  }

  render(){
    const data = this.props.data.allContentfulTest.edges[0].node;
    const {showMenu, showContactOverlay} = this.state;
  
    return(
      <div>
        <Header
          active={showMenu}
          showContactOverlay={showContactOverlay}
          toggleMenu={this.toggleMenu}
          toggleContactOverlay={this.toggleContactOverlay}/>
        <h1>Get up now get down.</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div>
          <div>{data.name}</div>
          <div> <img src={data.profilePhoto.resolutions.src} alt="Profile Photo" /> </div>
          <div>{data.profileDescription.profileDescription}</div>
        </div>
        <Carousel showContactOverlay={showContactOverlay} showMenu={showMenu}/>
        <Footer/>
      </div>
    )

  }
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    allContentfulTest {
      edges {
        node {
          id
          name
          profilePhoto{
            resolutions{
              src
            }
          }
          profileDescription{
            profileDescription
          }
        }
      }
    }
  }
`
