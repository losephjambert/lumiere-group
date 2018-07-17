import React from 'react'
import {PageLoader} from './pageLoader'
import Styled, {css} from 'styled-components'
import Lottie from 'react-lottie';
import * as animationData from '../assets/data.json'

const Container = Styled.div`
  position: fixed;
  z-index: 10;
  top: 10em;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 500ms;
  display: flex;
  justify-content: center;
  align-items; center;
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
        preserveAspectRatio: 'xMidYMid meet'
      }
    }

    const {isSiteLoaded} = this.props

    return (
      <Container isSiteLoaded={isSiteLoaded} >
        <Lottie options={defaultOptions}
                height={'70%'}
                width={'100%'}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}/>
      </Container>
    )
  }

}

export default (Loader)