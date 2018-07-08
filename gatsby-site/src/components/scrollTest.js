import React from 'react'

/*
***** To Do

***** 1. Finish scrollManager decorator so that it passes down relevant props using RequestAnimationFrame
*****     props: {scrollPositionY: int}

***** 2. Write windowManager decorator that passes down window dimension props using RequestAnimationFrame
*****     props: {width: int, height: int, portrait: bool, landscape: bool}
*/

export const scrollManager = (Component) => {
  return class ScrollManager extends React.Component{
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
      this.setState(prevState => ({
        scrollYPosition: prevState.scrollYPosition + (window.scrollY - prevState.scrollYPosition)
      }))
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
  return class WindowManager extends React.Component{
    constructor(props){
      super(props)
      this.state={
        dimensions: {
          width: 0,
          height: 0,
          scrollHeight: 0,
          landscape: false,
          portrait: false
        }
      }
    }

    resizeManager = (e) =>{
      requestAnimationFrame((e)=>this.handleResize(e))
    }

    handleResize = (e) => {
      console.log(`resize test decorator: `)
    }

    getInitialDimensions = () => {

      let calcScrollHeight = document.body.scrollHeight - document.body.offsetHeight - window.innerHeight + document.body.offsetHeight
      let calcWidth = window.innerWidth
      let calcHeight = window.innerHeight
      let calcLandscape = width > height
      let calcPortrait = !landscape

      const {width, height, landscape, portrait, scrollHeight} = this.state.dimensions

      this.setState(prevState => ({
        width: calcWidth,
        height: calcHeight,
        landscape: calcLandscape,
        portrait: calcPortrait,
        scrollHeight: calcScrollHeight
      }))
    }

    componentDidMount(){

      // window.addEventListener('resize', (e) => this.resizeManager(e))
      window.onload = () => {
        this.getInitialDimensions()
      }
    }
    
    componentWillUnmount(){
      // window.removeEventListener('resize', (e) => this.resizeManager(e))
    }

    render(){
      return(
        <Component {...this.state} {...this.props} {...this.newProps} />
      )
    }
  }
}
