import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import SVGContainer from '../components/svg-loader';
import svg from '../artwork/menu-logo.svg';
import close from '../artwork/close-button.svg';

const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: scroll;
  padding: 0 0 2.5em;

  .test{
    svg{
      min-width: 19.2rem;
      margin: 1.8em 0 7.5em;
    }
    g{
      stroke: white;
    }
  }

  .close{
    position: absolute;
    top: 1.8rem;
    right: 1.8rem;
    svg{
      min-width: 1.8rem;
    }
    svg > g > g > line{
      stroke: white;
    }
  }
`;
const MenuItems = styled.ul`
  width: 90%;
  margin-bottom: 7.5em;
`
const Item = styled.li`
  color: white;
  font-size: 2rem;
  list-style-type: none;
  border-top: .1em solid white;
  width: 100%;
  text-align: center;
  padding: 1.4em 0;
  margin: 0 auto;
  &:nth-last-of-type(1){
    border-bottom: .1em solid white;
  }
`;
const ContactInfo = styled.p`
  color: white;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-around;
  width: 90%;
`


// Menu Component
// displays a list of items that are passed into it
// each item onClick will transport user to that location on the site
// has 'X' onClick to close
// required:
//    list of items to display

const Menu = ({ /*Menu Metadata*/ }) => (
  <Container>
    <SVGContainer source={svg} className="test" />
    <SVGContainer source={close} className="close" />
    <MenuItems>
      <Item>About</Item>
      <Item>Team</Item>
      <Item>Services</Item>
      <Item>Contact</Item>
    </MenuItems>
    <ContactInfo>
      <span>info@thelumieregroup.com</span>
      <span>|</span>
      <span>206.323.9827</span>
    </ContactInfo>
  </Container>

)

export default Menu