import React from 'react'
import Styled, {css} from 'styled-components'
import Lottie from 'react-lottie'
import * as phoneAnimation from '../assets/logo-animation-phone.json'
import * as desktopAnimation from '../assets/logo-animation-desktop.json'
import {scrollManager,windowManager} from './eventManager'

const Container = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props=>props.defaultHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  background-color: rgba(255,255,255,1);
  transition: 200ms;
  opacity: ${props=>props.scrolledPastHeight ? 0 : 1};
  ${props=>props.isStopped && css`
    background-color: rgba(255,255,255,0);
    z-index: 7;
  `}
  ${props=>props.theme.forTabletLandscapeUp`
    height: ${props=>props.dynamicHeight}px;
  `}
`
  
const LottieContainer = Styled.div`
  width: 100%;
  height: 100%;

  ${props=>props.theme.forTabletLandscapeUp`
    div{
      transform: scale(.7, .7);
      transform-origin: center;
    }
    
    @supports (display: flex) {
      div{
        transform: scale(1, 1);
        transform-origin: center;
      }
      div > svg > g{
        transform-origin: center;
        transform: scale(.7, .7);
      }
    }
  `}
`

class Loader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isStopped: false
    }
  }

  handleAnimationEnd = () => {
    
    if(!this.state.isStopped){
      this.setState(prevState => ({
        isStopped: !prevState.isStopped
      }))
    }

  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.props.dimensions !== nextProps.dimensions || this.props.scrolledPastHeight !== nextProps.scrolledPastHeight) {
      return true
    }
    else if ( this.state.isStopped === nextState.isStopped) {
      return false
    }
    else{
      return true
    }
  }

  render() {

    let animationData = this.props.dimensions.width > 1100 ? desktopAnimation : phoneAnimation
    let animation = this.props.dimensions.width > 1100 ? 'desktopAnimation' : 'phoneAnimation'
 
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    const eventListeners = [
      {
        eventName: 'complete',
        callback: () => this.handleAnimationEnd(),
      },
    ]
    
    return (
      <Container
        scrolledPastHeight={this.props.scrolledPastHeight}
        defaultHeight={this.props.initialHeight}
        dynamicHeight={this.props.dimensions.height}
        isStopped={this.state.isStopped}>
        <LottieContainer>
          <Lottie options={defaultOptions}
                  eventListeners={eventListeners}
                  height={'100%'}
                  width={'100%'}/>
        </LottieContainer>
      </Container>
    )
  }

}

export default scrollManager(windowManager(Loader))