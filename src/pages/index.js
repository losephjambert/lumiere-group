import React from 'react'
import Styled, { ThemeProvider } from 'styled-components'
import Carousel from '../components/carousel'
import About from '../components/about'
import Header from '../components/header'
import Footer from '../components/footer'
import TeamMembers from '../components/teamMembers'
import TeamHeading from '../assets/team.svg'
import ServicesHeading from '../assets/services.svg'
import Modal from '../components/modal'
import { TeamCollectionTheme, ServicesCollectionTheme } from '../components/stubbedData'
import ServiceItems from '../components/serviceItems'
import GlobalTheme from '../styles/globalTheme'
import Loader from '../components/loader'

const AppContainer = Styled.div`
  position: relative;
  top: ${props => props.theme.headerSpaceBig};
  background-color: ${props => props.theme.white};
  opacity: ${props => props.loading ? 0 : 1};
  transition: 300ms;
`

const ContentContainer = Styled.div`
  position: relative;
  z-index: 10;
  background-color: ${props => props.theme.white};
`

class IndexPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
      showContactOverlay: false,
      showModal: false,
      modalContent: {
        content: {},
        theme: {}
      },
      loading: true
    }
  }

  toggleMenu = (delay) => {
    let handleToggle = () => {
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

    let timeout = setTimeout(handleToggle, delay)

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
    } else {
      this.setState(prevState => ({
        showModal: !prevState.showModal
      }))
    }
  }

  handleLoad = () => {
    this.setState(prevState => ({
      loading: !prevState.loading
    }))
  }

  render() {
    const about = this.props.data.allContentfulSiteInformation.edges[0].node.about.about
    const { phoneNumber, contactEmail } = this.props.data.allContentfulSiteInformation.edges[0].node
    const { images } = this.props.data.allContentfulCarousel.edges[0].node
    const teamMemberData = this.props.data.allContentfulTeamMember.edges
    const servicesData = this.props.data.allContentfulService.edges
    const { showMenu, showContactOverlay, showModal, modalContent } = this.state

    const itemLength = teamMemberData.length
    const isDivisibleByThree = itemLength % 3 === 0 && itemLength > 3;

    if (!isDivisibleByThree) {
      TeamCollectionTheme.columns = 2;
    }
    if (itemLength === 8 || itemLength === 12 || itemLength === 16) {
      TeamCollectionTheme.columns = 4;
    }

    return (
      <ThemeProvider theme={GlobalTheme}>
        <div>
          <Loader handleLoad={this.handleLoad} />
          <AppContainer loading={this.state.loading}>
            <Modal active={showModal} data={modalContent} toggleModal={this.toggleModal} />
            <Header
              contactInformation={{ phoneNumber, contactEmail }}
              showModal={showModal}
              showMenu={showMenu}
              showContactOverlay={showContactOverlay}
              toggleMenu={this.toggleMenu}
              toggleContactOverlay={this.toggleContactOverlay}
              showContactOverlay={showContactOverlay}
              toggleContactOverlay={this.toggleContactOverlay} />
            <ContentContainer>
              <About about={about} />
              <Carousel
                images={images} />
              <ThemeProvider theme={TeamCollectionTheme}>
                <TeamMembers
                  theme={TeamCollectionTheme}
                  toggleModal={this.toggleModal}
                  heading={TeamHeading}
                  teamMemberData={teamMemberData} />
              </ThemeProvider>
              <ThemeProvider theme={ServicesCollectionTheme}>
                <ServiceItems
                  toggleModal={this.toggleModal}
                  theme={ServicesCollectionTheme}
                  heading={ServicesHeading}
                  servicesData={servicesData} />
              </ThemeProvider>
            </ContentContainer>
            <Footer
              contactInformation={{ phoneNumber, contactEmail }}
              toggleContactOverlay={this.toggleContactOverlay} />
          </AppContainer>
        </div>
      </ThemeProvider>
    )

  }
}

export default IndexPage

export const indexQuery = graphql`
  query IndexQuery {
    allContentfulSiteInformation {
      edges {
        node {
          id
          title
          phoneNumber
          contactEmail
          about{
            about
          }
        }
      }
    }

    allContentfulCarousel {
      edges {
        node {
          id
          images{
            id
            title
            sizes {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }

    allContentfulTeamMember{
      edges{
        node{
					name
          description{
            description
          }
          title
          image{
            id
            sizes{
              src
              sizes
              srcSet
            }
          }
          
        }
      }
    }

    allContentfulService{
      edges{
        node{
					title
          description{
            description
          }
          darkImage{
						file{
              url
          	}
          }
          lightImage{
            file{
              url
            }
          }
        }
      }
    }

  }
`
