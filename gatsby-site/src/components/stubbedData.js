import {Colors} from '../styles/styleVariables'
import rinaImage from '../assets/rina.jpg'
import leleImage from '../assets/lele.jpg'
import erinImage from '../assets/erin.jpg'
import CarouselImage1 from '../assets/carousel-1.jpg'
import engagement from '../assets/management-and-engagement.svg'
import curation from '../assets/curatorial-services.svg'
import collections from '../assets/collections-management-and-registration.svg'
import lifecycle from '../assets/art-lifecycle.svg'

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
    subtitle: 'Managing Principle | Art Collection Consultant',
    description: 'This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. '
  },
  {
    image: erinImage,
    title: 'Erin Weible',
    subtitle: 'Managing Principle | Art Collection Consultant',
    description: 'This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. '
  },
  {
    image: leleImage,
    title: 'Lele Barnett',
    subtitle: 'Managing Principle | Art Collection Consultant',
    description: 'This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. '
  }
]

export const ServicesCollectionItems = [
  {
    image: engagement,
    title: 'Rina Luzius',
    subtitle: 'Managing Principle | Art Collection Consultant',
    description: 'This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. '
  },
  {
    image: curation,
    title: 'Erin Weible',
    subtitle: 'Managing Principle | Art Collection Consultant',
    description: 'This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. '
  },
  {
    image: collections,
    title: 'Lele Barnett',
    subtitle: 'Managing Principle | Art Collection Consultant',
    description: 'This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. '
  },
  {
    image: lifecycle,
    title: 'Lele Barnett',
    subtitle: 'Managing Principle | Art Collection Consultant',
    description: 'This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. '
  }
]

export const TeamCollectionTheme = {
  main: yellowBackground,
  inverse: black,
  columns: 3,
  size: '30rem'
}

export const ServicesCollectionTheme = {
  main: black,
  inverse: yellowBackground,
  columns: 4,
  size: '13.5rem'

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
