import React from 'react'
import Styled from 'styled-components'
import { Transition, animated } from 'react-spring'
import {loadManager} from './hoc-loader'

const LoaderContainer = Styled.div`
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: salmon;
    opacity: ${props => props.show ? 1 : 0};
`

const Logo = ({ show }) => (
  <LoaderContainer show={show}>
    logo animation. body movin? css? animate on scroll?
  </LoaderContainer>
)

export default loadManager(Logo)