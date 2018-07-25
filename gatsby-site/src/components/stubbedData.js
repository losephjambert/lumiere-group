import {Colors} from '../styles/styleVariables'
import rinaImage from '../assets/rina.jpg'
import leleImage from '../assets/lele.jpg'
import erinImage from '../assets/erin.jpg'
import CarouselImage1 from '../assets/carousel-1.jpg'
import CarouselImageMobile from '../assets/carousel-4487.jpg'
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
    title: 'Project Management and Engagement',
    description: 'This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. '
  },
  {
    image: curation,
    title: 'Curatorial Services',
    description: 'This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. '
  },
  {
    image: collections,
    title: 'Collections Management and Registration',
    description: 'This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. '
  },
  {
    image: lifecycle,
    title: 'Art Lifecycle',
    description: 'This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. This is the collection item description, used in the modal. '
  }
]

export const TeamCollectionTheme = {
  type: 'team',
  main: yellowBackground,
  inverse: black,
  columns: 3,
  smallPhoneSize: '20.5rem',
  laptopSize: '25rem',
  defaultSize: '25rem'
}

export const ServicesCollectionTheme = {
  type: 'services',
  main: black,
  inverse: yellowBackground,
  columns: 4,
  smallPhoneSize: '15.5rem',
  laptopSize: '17.5rem',
  defaultSize: '17.5rem'
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

export const artwork = [
  {
    default: {
      name: CarouselImageMobile.split("/").pop().split(".")[0],
      path: CarouselImageMobile,
      altText: 'alt text'
    },
    large: {
      name: CarouselImage1.split("/").pop().split(".")[0],
      path: CarouselImage1,
      altText: 'alt text'
    }
  }
]

console.log(CarouselImage1)