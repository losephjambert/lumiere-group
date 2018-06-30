import React from 'react'
import Link from 'gatsby-link'
import Styled, {ThemeProvider} from 'styled-components'
import Colors from '../styles/colors'

import Carousel from '../components/carousel'
import About from '../components/about'
import Header from '../components/header'
import Footer from '../components/footer'
import Landing from '../components/landing'
import Collection from '../components/collection'
import TeamHeading from '../assets/team.svg'
import ServicesHeading from '../assets/services.svg'
import {TeamCollectionItems, ServicesCollectionItems ,TeamCollectionTheme, ServicesCollectionTheme, CarouselImages} from '../components/stubbedData'

const {
  blueBackground ,
  yellowBackground ,
  hoverColor ,
  white ,
  black
} = Colors

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

const AppContainer = Styled.div`
  padding-top: 100vh;
  background-color: ${white};
`

const ContentContainer = Styled.div`
  position: relative;
  z-index: 10;
  background-color: ${white};
`

class IndexPage extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showContactOverlay: false,
      showHeaderLogo: false,
      showCollectionItemOverlay: false
    }
  }

  // State Controllers
  toggleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }))
  }

  toggleContactOverlay = () => {
    this.setState(prevState => ({
      showContactOverlay: !prevState.showContactOverlay
    }))
  }

  toggleHeaderLogo = () => {
    this.setState(prevState => ({
      showHeaderLogo: !prevState.showHeaderLogo
    }))
  }

  toggleCollectionItemOverlay = () => {
    this.setState(prevState => ({
      showCollectionItemOverlay: !prevState.showCollectionItemOverlay
    }))
  }


  // Scroll Handler
  handleDebounce = (e) =>{
    requestAnimationFrame((e)=>this.handleScroll(e))
  }

  lastScrollTop=0
  windowHeight = window.innerHeight
  handleScroll = (e) =>{
    const scrollDistance=window.scrollY
    this.lastScrollTop=scrollDistance
    if (scrollDistance >= this.windowHeight && !this.state.showHeaderLogo){
      this.toggleHeaderLogo()
      }
    if (scrollDistance <= this.windowHeight && this.state.showHeaderLogo) {
      this.toggleHeaderLogo()
    }
  }

  // Component Lifecycle Events
  componentDidMount(){
    window.addEventListener('scroll', (e)=>this.handleDebounce(e))
  }

  render(){
    const data = this.props.data.allContentfulTest.edges[0].node;
    const {showHeaderLogo, showMenu, showContactOverlay, showCollectionItemOverlay} = this.state;
  
    return(
      <AppContainer>
        <Header
          showHeaderLogo={showHeaderLogo}
          active={showMenu}
          showContactOverlay={showContactOverlay}
          toggleMenu={this.toggleMenu}
          toggleContactOverlay={this.toggleContactOverlay}/>
        <Landing />
        <ContentContainer>
          <About />
          <Carousel showContactOverlay={showContactOverlay} showMenu={showMenu} images={CarouselImages}/>
          <Collection
            toggleCollectionItemOverlay={this.toggleCollectionItemOverlay}
            showCollectionItemOverlay={showCollectionItemOverlay}
            theme={TeamCollectionTheme}
            heading={TeamHeading}
            collectionItems={TeamCollectionItems} />
          <Collection
            toggleCollectionItemOverlay={this.toggleCollectionItemOverlay}
            showCollectionItemOverlay={showCollectionItemOverlay}
            theme={ServicesCollectionTheme}
            heading={ServicesHeading}
            collectionItems={ServicesCollectionItems} />
          <Footer/>
        </ContentContainer>
      </AppContainer>
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
