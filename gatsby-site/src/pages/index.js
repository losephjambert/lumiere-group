import React from 'react'
import Styled from 'styled-components'
import Colors from '../styles/colors'
import Carousel from '../components/carousel'
import About from '../components/about'
import Header from '../components/header'
import Footer from '../components/footer'
import Landing from '../components/landing'
import Collection from '../components/collection'
import TeamHeading from '../assets/team.svg'
import ServicesHeading from '../assets/services.svg'
import Modal from '../components/modal'
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
      showModal: false,
      modalContent: {
        content: {},
        theme: {}
      }
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

  toggleModal = (payload, theme) => {
    if (payload && theme) {      
      this.setState(prevState => ({
        showModal: !prevState.showModal,
        modalContent: {
          content: payload,
          theme: theme
        } 
      }))
    } else{
      this.setState(prevState => ({
        showModal: !prevState.showModal
      }))
    }
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
    const {showHeaderLogo, showMenu, showContactOverlay, showModal, modalContent} = this.state;
  
    return(
      <AppContainer>
        {showModal && <Modal active={showModal} data={modalContent} toggleModal={this.toggleModal}/>}
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
            toggleModal={this.toggleModal}
            showModal={showModal}
            theme={TeamCollectionTheme}
            heading={TeamHeading}
            collectionItems={TeamCollectionItems} />
          <Collection
            toggleModal={this.toggleModal}
            showModal={showModal}
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
