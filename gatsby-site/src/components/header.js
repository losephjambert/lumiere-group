import React from 'react'
import Link from 'gatsby-link'

// Header Component
// height: 92px;
// always fixed
// menu trigger left (component) onClick activate menu component
// mail trigger right (component) onClick activate mail component


const Header = ({ siteTitle }) => (
<div>
  <h1>
    <Link to="/">
      {siteTitle}
    </Link>
  </h1>
</div>

)

export default Header
