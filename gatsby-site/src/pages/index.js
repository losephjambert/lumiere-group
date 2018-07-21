import React from 'react'
import Styled, {ThemeProvider} from 'styled-components'
import Carousel from '../components/carousel'
import About from '../components/about'
import Header from '../components/header'
import Footer from '../components/footer'
import Landing from '../components/landing'
import TeamMembers from '../components/teamMembers'
import TeamHeading from '../assets/team.svg'
import ServicesHeading from '../assets/services.svg'
import Modal from '../components/modal'
import {TeamCollectionItems, ServicesCollectionItems ,TeamCollectionTheme, ServicesCollectionTheme, CarouselImages, artwork} from '../components/stubbedData'
import ServiceItems from '../components/serviceItems'
import GlobalTheme from '../styles/globalTheme'
import Loader from '../components/loader'

const AppContainer = Styled.div`
  padding-top: 100vh;
  position: relative;
  top: ${props=>props.theme.headerSpaceBig};
  background-color: ${props=>props.theme.white};
`

const ContentContainer = Styled.div`
  position: relative;
  z-index: 10;
  background-color: ${props=>props.theme.white};
`

class IndexPage extends React.Component{
  
  constructor(props) {
    super(props)
    this.windowHeight
    this.state = {
      showMenu: false,
      showContactOverlay: false,
      showModal: false,
      modalContent: {
        content: {},
        theme: {}
      }
    }
  }

  // State Controllers
  toggleMenu = () => {
    if (!this.state.showContactOverlay) {
      this.setState(prevState => ({
        showMenu: !prevState.showMenu
      }))
    } else {
      this.setState(prevState => ({
        showMenu: !prevState.showMenu,
        showContactOverlay: !prevState.showContactOverlay
      }))
    }
  }

  toggleContactOverlay = () => {
    if (!this.state.showMenu) {
      this.setState(prevState => ({
      showContactOverlay: !prevState.showContactOverlay
      }))
    } else {
      this.setState(prevState => ({
        showContactOverlay: !prevState.showContactOverlay,
        showMenu: !prevState.showMenu
      }))
    }
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

  render(){
    const data = this.props.data.allContentfulTest.edges[0].node
    const {showMenu, showContactOverlay, showModal, modalContent} = this.state
  
    return(
      <ThemeProvider theme={GlobalTheme}>
        <AppContainer>
          <Loader />
          {showModal && <Modal active={showModal} data={modalContent} toggleModal={this.toggleModal} />}
          <Header
            showModal={showModal}
            showMenu={showMenu}
            showContactOverlay={showContactOverlay}
            toggleMenu={this.toggleMenu}
            toggleContactOverlay={this.toggleContactOverlay}
            showContactOverlay={showContactOverlay}
            toggleContactOverlay={this.toggleContactOverlay}/>
          <ContentContainer>
            <About />
            <Carousel
              showContactOverlay={showContactOverlay}
              showMenu={showMenu}
              images={artwork}/>
            <ThemeProvider theme={TeamCollectionTheme}>
              <TeamMembers
                theme={TeamCollectionTheme}
                toggleModal={this.toggleModal}
                heading={TeamHeading}
                collectionItems={TeamCollectionItems} />
            </ThemeProvider>
            <ThemeProvider theme={ServicesCollectionTheme}>
              <ServiceItems
                toggleModal={this.toggleModal}
                theme={ServicesCollectionTheme}
                heading={ServicesHeading}
                collectionItems={ServicesCollectionItems} />
              </ThemeProvider>
          </ContentContainer>
          <Footer toggleContactOverlay={this.toggleContactOverlay}/>
        </AppContainer>
      </ThemeProvider>
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
