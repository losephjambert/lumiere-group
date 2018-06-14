import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

const Profile = ({data}) => (
  <div>
    <h1>Get up now get down.</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      <div>{data.name}</div>
      <div> <img src={data.profilePhoto.resolutions.src} alt="Profile Photo" /> </div>
      <div>{data.profileDescription.profileDescription}</div>
    </div>
  </div>
)


class IndexPage extends React.Component{
  render(){
    const data = this.props.data.allContentfulTest.edges[0].node;
  
    return(
      <Profile data={data}/>
    )

  }
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    allContentfulTest {
      edges {
        node {
          id
          name
          profilePhoto{
            resolutions{
              src
            }
          }
          profileDescription{
            profileDescription
          }
        }
      }
    }
  }
`
