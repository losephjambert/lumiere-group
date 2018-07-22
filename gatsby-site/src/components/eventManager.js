import React from 'react'

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
        scrollYPosition: Math.trunc(window.scrollY)
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

    resizeTimeout
    resizeManager = (e) =>{
      if ( !this.resizeTimeout ) {
          this.resizeTimeout = setTimeout( (e) => {
          this.resizeTimeout = null
          requestAnimationFrame((e)=>this.handleResize(e))
         }, 1000)
      }
    }

    handleResize = (e) => {
      this.getDimensions()
    }

    getDimensions = () => {

      let calcScrollHeight = document.body.scrollHeight - document.body.offsetHeight - window.innerHeight + document.body.offsetHeight
      let calcWidth = window.innerWidth
      let calcHeight = window.innerHeight
      let calcLandscape = calcWidth > calcHeight
      let calcPortrait = !calcLandscape

      this.setState(prevState => ({
        dimensions:{
          width: calcWidth,
          height: calcHeight,
          landscape: calcLandscape,
          portrait: calcPortrait,
          scrollHeight: calcScrollHeight
        }
      }))

    }

    componentWillMount(){
      typeof window !== undefined && this.getDimensions()
    }

    componentDidMount(){
      window.addEventListener('resize', (e) => this.resizeManager(e), false)
      this.getDimensions()
    }
    
    componentWillUnmount(){
      window.removeEventListener('resize', (e) => this.resizeManager(e), false)
    }

    render(){
      return(
        <Component {...this.state} {...this.props} {...this.newProps} />
      )
    }
  }
}
