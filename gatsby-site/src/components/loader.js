import React from 'react'
import Styled, {css} from 'styled-components'
import Lottie from 'react-lottie'
import * as animationData from '../assets/rotating-logo-2000x2000-smaller-low-center.json'
import {windowManager} from './eventManager'

const Container = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  background-color: rgba(255,255,255,1);
  transition: 200ms;
  ${props=>props.isStopped && css`
    background-color: rgba(255,255,255,0);
    z-index: 10;
  `}
`
  
const LottieContainer = Styled.div`
  width: 100%;
  height: 100%;
`

class Loader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
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
    return this.state.isStopped === nextState.isStopped ? false : true
  }

  render() {
 
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
        isStopped={this.state.isStopped}
        style={{height: this.props.dimensions.height}}>
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

export default windowManager(Loader)