import {css} from 'styled-components'

// Media Queries
const sizes = {
  forMediumPhonesUp: 360,
  forBigPhonesUp: 411,
  forTabletPortraitUp: 600,
  forTabletLandscapeUp: 900,
  forLaptopUp: 1024,
  forDesktopUp: 1200,
  forBigMonitorsUp: 1800
}

export const Media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `

  return acc
}, {})

// Global element sizes
export const Dimensions = {
  headerSpaceSmall:   '6.2rem' ,
  headerSpaceMedium:  '7.7rem' ,
  headerSpaceBig:     '9.2rem' ,
}

// Colors
export const Colors = {
  blueBackground:    '#dfecf7' ,
  yellowBackground:  '#f9f3d9' ,
  hoverColor:        '#1588fc' ,
  white:             '#FCFCFC' ,
  black:             '#010101' ,
}