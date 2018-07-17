import React from 'react'

export const PageLoader = (Component) => {
  return class ScrollManager extends React.Component{
    constructor(props){
      super(props)
      this.state={
        isSiteLoaded: false
      }
    }

    ready = (callbackFunction) =>{
      if(document.readyState != 'loading'){
        callbackFunction(event)
      } else {
        document.addEventListener("DOMContentLoaded", callbackFunction)
      }
    }

    handleSiteLoad = () => {
      setTimeout( () => {
        this.setState(prevState => ({
          isSiteLoaded:!prevState.isSiteLoaded
        }))
      }, 20000)
    }

    componentDidMount(){
      this.ready(event => {
        console.log('DOM is ready.')
        this.handleSiteLoad()
      })
    }

    render(){
      return(
        <Component {...this.state} {...this.props} {...this.newProps} />
      )
    }
  }
}