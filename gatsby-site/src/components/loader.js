import React from 'react'
import {PageLoader} from './pageLoader'
import Styled, {css} from 'styled-components'
import Lottie from 'react-lottie';
import * as animationData from '../assets/rotating-logo-2000x2000.json'

const Container = Styled.div`
  position: fixed;
  z-index: 10;
  top: -13em;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 500ms;
  display: flex;
  justify-content: center;
  align-items; center;
  transform: scale(1.3);
`

const LottieContainer = Styled(Lottie)`
  outline: 1px solid red;
`

class Loader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
      isPaused: false
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

    const {isSiteLoaded} = this.props

    return (
      <Container isSiteLoaded={isSiteLoaded} >
        <LottieContainer options={defaultOptions}
                height={'100%'}
                width={'100%'}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}/>
      </Container>
    )
  }

}

export default (Loader)