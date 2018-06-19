import React from 'react'
import Link from 'gatsby-link'
import Carousel from 'nuka-carousel';

// Landing Component
// displays landing page content
// displays logo component inside it

const Landing = ({ /*Landing Metadata*/ }) => (
    <Carousel wrapAround={true}>
        <img src="http://fillmurray.com/1000/600&text=slide1" />
        <img src="http://fillmurray.com/1000/600&text=slide2" />
        <img src="http://fillmurray.com/1000/600&text=slide3" />
        <img src="http://fillmurray.com/1000/600&text=slide4" />
        <img src="http://fillmurray.com/1000/600&text=slide5" />
        <img src="http://fillmurray.com/1000/600&text=slide6" />
        <img src="http://fillmurray.com/1000/600&text=slide7" />
    </Carousel>
)

export default Landing
