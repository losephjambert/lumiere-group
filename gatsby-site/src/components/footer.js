import React from 'react'
import Styled from 'styled-components'

const FooterContainer = Styled.div`
  position: fixed;
  z-index: -1;
  top: ${props=>props.theme.headerSpaceBig};
  height: 100vh;
  width: 100%;
  background-color: ${props=>props.theme.white};
  box-shadow: inset 0 0 0 2px red;
`

const Footer = ({  }) => (

  <FooterContainer>
    Content
  </FooterContainer>

)

export default Footer