import rinaImage from '../assets/rina.jpg'
import leleImage from '../assets/lele.jpg'
import erinImage from '../assets/erin.jpg'
import Colors from '../styles/colors'
import CarouselImage1 from '../assets/carousel-1.jpg'

const {
  blueBackground ,
  yellowBackground ,
  hoverColor ,
  white ,
  black
} = Colors

export const TeamCollectionItems = [
  {
    image: rinaImage,
    title: 'Rina Luzius',
    description: 'Managing Principle | Art Collection Consultant'
  },
  {
    image: erinImage,
    title: 'Erin Weible',
    description: 'Managing Principle | Art Collection Consultant'
  },
  {
    image: leleImage,
    title: 'Lele Barnett',
    description: 'Managing Principle | Art Collection Consultant'
  }
]
export const ServicesCollectionItems = [
  {
    image: rinaImage,
    title: 'Rina Luzius',
    description: 'Managing Principle | Art Collection Consultant'
  },
  {
    image: erinImage,
    title: 'Erin Weible',
    description: 'Managing Principle | Art Collection Consultant'
  },
  {
    image: leleImage,
    title: 'Lele Barnett',
    description: 'Managing Principle | Art Collection Consultant'
  },
  {
    image: leleImage,
    title: 'Lele Barnett',
    description: 'Managing Principle | Art Collection Consultant'
  }
]
export const TeamCollectionTheme = {
  backgroundColor: yellowBackground,
  color: black,
  columns: 3

}
export const ServicesCollectionTheme = {
  backgroundColor: black,
  color: white,
  columns: 4

}

export const CarouselImages = [
  {
    image: CarouselImage1,
    altText: 'The Managing Partners in their Studio'
  },
  {
    image: CarouselImage1,
    altText: 'The Managing Partners in their Studio'
  },
  {
    image: CarouselImage1,
    altText: 'The Managing Partners in their Studio'
  },
]
