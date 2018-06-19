import React from 'react'
import Link from 'gatsby-link'

// Footer Component
// min-height: 100vh;
// always fixed
// scroll to reveal

const Footer = ({ footerTitle }) => (
<div>
  <h1>
    <Link to="/">
      {footerTitle}
    </Link>
  </h1>
</div>

)

export default Footer