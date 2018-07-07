import React from 'react'

const scroller = (Component) => {
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

export default scroller