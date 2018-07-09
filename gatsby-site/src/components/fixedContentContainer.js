import React from 'react'
import {windowManager, scrollManager} from './hocEventManager'
// import Styled from 'styled-components'
import Landing from './landing';
import Header from './header'
import Footer from './footer'
import Logo from '../assets/header-logo.svg'
import LogoSVGContainer from '../styles/logoSVGContainer'



class FixedContentContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      renderLandingContent: true,
      renderFooterContent: false,
      renderHeader: true,
      renderHeaderLogo: false
    }
  }

  componentDidUpdate(){

    const {scrollYPosition, dimensions:{ height, scrollHeight }} = this.props
    const {renderFooterContent, renderHeader, renderHeaderLogo, renderLandingContent} = this.state
    
    if(scrollYPosition > height && renderHeaderLogo===false){ 
      this.setState(prevState => ({
        renderHeaderLogo: !prevState.renderHeaderLogo,
        renderLandingContent: !prevState.renderLandingContent
      }))
    } else if(scrollYPosition < height && renderHeaderLogo===true){
      this.setState(prevState => ({
        renderHeaderLogo: !prevState.renderHeaderLogo,
        renderLandingContent: !prevState.renderLandingContent
      }))
    }

    if (scrollYPosition > scrollHeight - (height/2) && renderFooterContent===false) {
      this.setState(prevState => ({
        renderFooterContent: !prevState.renderFooterContent
      }))
    } else if (scrollYPosition < scrollHeight - (height/2) && renderFooterContent===true) {
      this.setState(prevState => ({
        renderFooterContent: !prevState.renderFooterContent
      }))
    }


  }

  render(){
    
    return(
      <div>
        {this.state.renderHeaderLogo && <LogoSVGContainer source={Logo} show={this.state.renderHeaderLogo} size={'5.6rem'}/>}
        {/* <LogoSVGContainer source={Logo} show={this.state.renderHeaderLogo} size={'5.6rem'}/> */}
        {this.state.renderLandingContent && <Landing />}
        {this.state.renderFooterContent && <Footer />}
      </div>
    )

  }

}

export default windowManager(scrollManager(FixedContentContainer))