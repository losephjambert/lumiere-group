import React from 'react'
import Link from 'gatsby-link'

import Carousel from '../components/carousel'
import Menu from '../components/menu'
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
    }
  }

  toggleMenu = (e) => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }))
    console.log('togglemenu')
  }

  render(){
    const data = this.props.data.allContentfulTest.edges[0].node;
    const {showMenu} = this.state;
  
    return(
      <div>
        <Header
          active={showMenu}
          toggleMenu={this.toggleMenu}/>
        <Menu 
          active={showMenu}
          toggleMenu={this.toggleMenu}/>
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
