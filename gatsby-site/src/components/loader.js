import React from 'react'
import Styled, {css} from 'styled-components'
import Lottie from 'react-lottie';
import * as animationData from '../assets/rotating-logo-2000x2000-smaller-centered.json'

const Container = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  // transform: translate3d(0,-15rem,0);
`

class Loader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
    }
  }

  handleAnimationEnd = () => {
    console.log('the animation completed')
    
    if(!this.state.isStopped){
      this.setState(prevState => ({
        isStopped: !prevState.isStopped
      }))
    }

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
      <Container isStopped={this.state.isStopped} >
        <LottieContainer>
          <Lottie options={defaultOptions}
                  eventListeners={eventListeners}
                  height={'110%'}
                  width={'100%'}/>
        </LottieContainer>
      </Container>
    )
  }

}

export default Loader