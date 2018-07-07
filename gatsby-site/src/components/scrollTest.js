import React from 'react'

/*
***** To Do

***** 1. Finish scrollManager decorator so that it passes down relevant props using RequestAnimationFrame
*****     props: {scrollPositionY: int}

***** 2. Write windowManager decorator that passes down window dimension props using RequestAnimationFrame
*****     props: {width: int, height: int, portrait: bool, landscape: bool}
*/

export const scrollManager = (Component) => {
  return class ScrollTest extends React.Component{
    constructor(props){
      super(props)
      this.state={
        scrollYPosition: 0
      }
    }

    scrollManager = (e) =>{
      requestAnimationFrame((e)=>this.handleScroll(e))
    }

    handleScroll = (e) => {
      console.log(`scroll test decorator: ${window.scrollY}`)
      this.setState({
        scrollYPosition: window.scrollY
      })
    }

    componentDidMount(){
      window.addEventListener('scroll', (e) => this.scrollManager(e))
    }
    
    componentWillUnmount(){
      window.removeEventListener('scroll', (e) => this.scrollManager(e))
    }

    render(){
      return(
        <Component {...this.state} {...this.props} {...this.newProps} />
      )
    }
  }
}

export const windowManager = (Component) => {
  return class ScrollTest extends React.Component{
    constructor(props){
      super(props)
      this.state={
        width: 0,
        height: 0,
        landscape: false,
        portrait: false
      }
    }

    scrollManager = (e) =>{
      requestAnimationFrame((e)=>this.handleScroll(e))
    }

    handleScroll = (e) => {
      console.log(`scroll test decorator: ${window.scrollY}`)
      this.setState({
        scrollYPosition: window.scrollY
      })
    }

    componentDidMount(){
      window.addEventListener('scroll', (e) => this.scrollManager(e))
    }
    
    componentWillUnmount(){
      window.removeEventListener('scroll', (e) => this.scrollManager(e))
    }

    render(){
      return(
        <Component {...this.state} {...this.props} {...this.newProps} />
      )
    }
  }
}
