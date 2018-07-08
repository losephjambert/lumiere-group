import React from 'react'
import { Transition, animated } from 'react-spring'

const LoaderContainer = Styled.div`
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: salmon;
`

const Logo = ({ /*Logo Metadata*/ }) => (
<LoaderContainer>
    logo animation. body movin? css? animate on scroll?
</LoaderContainer>

)

export default Logo