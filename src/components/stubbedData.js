import {Colors} from '../styles/styleVariables'
import rinaImage from '../assets/rina.jpg'
import leleImage from '../assets/lele.jpg'
import erinImage from '../assets/erin.jpg'
import CarouselImage1 from '../assets/carousel-1-opt.jpg'
import CarouselImage2 from '../assets/carousel-2-opt.jpg'
import CarouselImage3 from '../assets/carousel-3-opt.jpg'
import CarouselImage4 from '../assets/carousel-4-opt.jpg'
import CarouselImage5 from '../assets/carousel-5-opt.jpg'
import CarouselImage6 from '../assets/carousel-6-opt.jpg'
import CarouselImageMobile from '../assets/carousel-4487.jpg'
import engagement from '../assets/management-and-engagement.svg'
import curation from '../assets/curatorial-services.svg'
import collections from '../assets/collections-management-and-registration.svg'
import lifecycle from '../assets/art-lifecycle.svg'
import engagementDark from '../assets/management-and-engagement-dark.svg'
import curationDark from '../assets/curatorial-services-dark.svg'
import collectionsDark from '../assets/collections-management-and-registration-dark.svg'
import lifecycleDark from '../assets/art-lifecycle-dark.svg'

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
    subtitle: 'Art Collection Consultant',
    description: "Rina Luzius is the Senior Registrar for the Microsoft Art Collection and an Art Collection Consultant at The Lumiere Group. At Microsoft, she manages a collection containing 5,000 works of contemporary art, overseeing all physical art movement and storage for this very active collection. Rina’s additional expertise includes: researching and implementing content management systems; establishing and maintaining legal and ethical compliance; long-range collections planning; and disaster preparation and mitigation. Rina was an auxiliary faculty member of the Museology graduate program at the University of Washington for 10 years. She was previously an Assistant Collections Manager at the Burke Museum, and has worked as a paper conservation technician. Throughout her career, she has worked as an independent contractor for the Bellevue Arts Museum, the Museum of History and Industry, the Wing Luke Museum, and the Duwamish Longhouse and Cultural Center. Rina holds a BA in Anthropology, and an MA in Museology, both from the University of Washington. "
  },
  {
    image: erinImage,
    title: 'Erin Weible',
    subtitle: 'Art Consultant, Corporate and Private Collections',
    description: 'Erin Weible has been working with private, public, and corporate art collections for over a decade. She currently acts as the Engagement Director for the Microsoft Art Collection and is an Art Collection Consultant at The Lumiere Group. Erin’s focus is on strategies for corporate and private collection acquisition, care and management, with an emphasis on fostering excitement for the arts among employees and visitors. At Microsoft, she manages dedicated arts professionals and oversees major initiatives, including planning and policy creation, aligning the corporate vision with the art program, senior stakeholder relationships, and all collection forecasting and budgeting. A former Project Manager at Microsoft and RealNetworks, Erin left the software industry to pursue her passion for the arts, working at the Henry Art Gallery, Seattle Art Museum, and Tacoma Art Museum prior to launching The Lumiere Group. With a background in fine arts, an MA in Museology from the University of Washington, and extensive experience leading teams, Erin expertly translates the needs of artwork for a corporate audience.'
  },
  {
    image: leleImage,
    title: 'Lele Barnett',
    subtitle: 'Art Advisor',
    description: "Lele Barnett is the Curator of the Microsoft Art Collection, an Art Advisor at The Lumiere Group, and a curator for the Washington State Arts Commission. She has also curated independent art exhibitions for the Bumbershoot Festival, the Washington State Convention Center, and the Wing Luke Asian Museum. Lele has been a panelist for the Frayed Wire Festival, Jack Straw New Media Gallery, Seattle Mayor's Office of Arts & Cultural Affairs, the City of Redmond, and SoundTransit. She was the co-founder and curator for McLeod Residence: a home for extraordinary living through art, technology, and collaboration. Prior to that, she studied Interdisciplinary Art and Art History at the University of Washington and worked in galleries in Seattle, New York, and Southern California."
  }
]

export const ServicesCollectionItems = [
  {
    image: engagement,
    imageDark: engagementDark,
    title: 'Project Management and Engagement',
    description: "Aligning art with corporate or private goals can be challenging. Our experienced team assists with forecasting for budgets, risks and dependencies, while providing clear reports and project charters. We are experienced engaging all project stakeholders, from visiting guests to invested employees, and can assist with an outreach plan for any audience."
  },
  {
    image: curation,
    imageDark: curationDark,
    title: 'Curatorial Services',
    description: "If you are looking to start an art collection or add art to an existing collection, The Lumiere Group offers exceptional curatorial services including art market research, advising on acquisitions to fit your needs, and negotiating with galleries to ensure that new acquisitions are strong investments. We specialize in strategic collection planning to help your collection grow sustainably and flourish over time."
  },
  {
    image: collections,
    imageDark: collectionsDark,
    title: 'Collections Management and Registration',
    description: "The Lumiere Group offers a suite of artwork documentation services for both established and emerging collections. Our collections management services ensure your artworks are thoroughly documented, comply with federal laws, and that the information is easy to access."
  },
  {
    image: lifecycle,
    imageDark: lifecycleDark,
    title: 'Art Lifecycle',
    description: "The life of an artwork extends long after it is added to a collection. Our team is committed to working with established collections to manage artwork over time, including evaluating artwork aesthetic and financial values, negotiating loans, and thoughtfully removing artwork from your collection as you refine your collecting goals."
  }
]

export const TeamCollectionTheme = {
  type: 'team',
  main: yellowBackground,
  inverse: black,
  columns: 2,
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
    path: CarouselImage1,
    altText: ''
  },
  {
    path: CarouselImage2,
    altText: ''
  },
  {
    path: CarouselImage3,
    altText: ''
  },
  {
    path: CarouselImage4,
    altText: ''
  },
  {
    path: CarouselImage5,
    altText: ''
  },
  {
    path: CarouselImage6,
    altText: ''
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
