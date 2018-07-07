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
import {TeamCollectionItems, ServicesCollectionItems ,TeamCollectionTheme, ServicesCollectionTheme, CarouselImages} from '../components/stubbedData'
import ServiceItems from '../components/serviceItems'
import GlobalTheme from '../styles/globalTheme'
import ScrollTest from '../components/scrollTest'
import { withScroll, withWindow } from 'react-window-decorators'
import ScrollManager from 'window-scroll-manager'

if (typeof window === 'undefined') { global.window = {} }

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
    this.state = {
      showMenu: false,
      showContactOverlay: false,
      showHeaderLogo: false,
      showModal: false,
      showFooter: false,
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

  toggleFooter = () => {
    this.setState(prevState => ({
      showFooter: !prevState.showFooter
    }))
    console.log('toggle footer')
  }

  // Scroll Handler
  handleDebounce = (e) =>{
    requestAnimationFrame((e)=>this.handleScroll(e))
  }
  
  lastScrollTop=0
  windowHeight = window.innerHeight
  handleScroll = (e) =>{
    const scrollDistance=window.scrollY
    let scrollY = window.scrollY
    let visible = document.documentElement.clientHeight
    let pageHeight = document.documentElement.scrollHeight
    let bottomOfPage = visible + scrollY === pageHeight
    let showFooterContent = scrollY + visible > pageHeight - visible/2
    if (showFooterContent && !this.state.showFooter) {
      this.toggleFooter()
    }
    if (!showFooterContent && this.state.showFooter) {
      this.toggleFooter()
    }

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
    // window.addEventListener('window-scroll', (e)=>this.handleScroll(e))
  }

  render(){
    const data = this.props.data.allContentfulTest.edges[0].node
    const {showHeaderLogo, showMenu, showContactOverlay, showModal, modalContent, showFooter} = this.state
  
    return(
      <ThemeProvider theme={GlobalTheme}>
        <AppContainer>
          {showModal && <Modal active={showModal} data={modalContent} toggleModal={this.toggleModal} handleKeyPress={this.handleKeyPress}/>}
          <Header
            showModal={showModal}
            // showHeaderLogo={showHeaderLogo}
            showHeaderLogo={this.props.scrollPositionY >= this.props.dimensions.height}
            active={showMenu}
            showContactOverlay={showContactOverlay}
            toggleMenu={this.toggleMenu}
            toggleContactOverlay={this.toggleContactOverlay}/>
          <Landing show={showHeaderLogo}/>
          <ContentContainer>
            <About />
            <Carousel
              showContactOverlay={showContactOverlay}
              showMenu={showMenu}
              images={CarouselImages}/>
            <ThemeProvider theme={TeamCollectionTheme}>
              <TeamMembers
                theme={TeamCollectionTheme}
                toggleModal={this.toggleModal}
                showModal={showModal}
                heading={TeamHeading}
                collectionItems={TeamCollectionItems} />
            </ThemeProvider>
            <ThemeProvider theme={ServicesCollectionTheme}>
              <ServiceItems
                toggleModal={this.toggleModal}
                showModal={showModal}
                theme={ServicesCollectionTheme}
                heading={ServicesHeading}
                collectionItems={ServicesCollectionItems} />
              </ThemeProvider>
          </ContentContainer>
          <Footer showFooter={showFooter} scrollPositionY={this.props.scrollPositionY}/>
        </AppContainer>
      </ThemeProvider>
    )

  }
}

export default withWindow(withScroll(IndexPage))

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
