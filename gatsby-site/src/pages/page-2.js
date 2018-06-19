import React from 'react'
import Link from 'gatsby-link'
import Carousel from '../components/carousel'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Carousel/>
  </div>
)

export default SecondPage
