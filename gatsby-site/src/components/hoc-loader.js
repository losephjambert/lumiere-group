import React from 'react'

export const loadManager = (Component) => {
  return class LoadManager extends React.Component{
    constructor(props){
      super(props)
      this.state={
        showLoader: true
      }
    }

    handlePageLoad = (e) => {
      this.setState(prevState => ({
        showLoader: !prevState.showLoader
      }))
    }

    componentDidMount(){
      document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          this.handlePageLoad()
          console.log('readyState complete')
        }
      }
    }

    render(){
      return(
        <Component {...this.state} {...this.props} {...this.newProps} />
      )
    }
  }
}