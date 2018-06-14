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
      <div
        style={{
          display: `flex`,
          alignItems: `center`
        }}
      >
        <div>
          {data.profilePhoto.resolutions.src && (
            <Img
              style={{ margin: 0 }}
            />
          )}
        </div>
        <div style={{ flex: 1 }}>{data.name}</div>
        <div style={{ flex: 1 }}>{data.profileDescription.profileDescription}</div>
      </div>
    </div>
  </div>
)


class IndexPage extends React.Component{
  render(){
    const data = this.props.data.allContentfulTest.edges[0].node;
    console.log(data);
  
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
