import React from 'react'
import Styled from 'styled-components'
import CollectionSVGContainer from '../styles/collectionSVGContainer'
import {
  CollectionContainer,
  CollectionList,
  CollectionItem,
  CollectionItemButton,
  CollectionItemImage,
  CollectionItemTitle,
  CollectionItemSubtitle
} from '../styles/collectionItemStyles';

const TeamMemberCollectionItemButton = Styled(CollectionItemButton)`
  &:hover ${CollectionItemImage}{
    filter: grayscale(0);
    background-blend-mode: unset;
  }
`

const TeamMemberImage = Styled(CollectionItemImage)`
  border-radius: 100%;
  background-blend-mode: multiply;
  mix-blend-mode: multiply;
  background-size: cover;
  filter: grayscale(1);
  &.LeleBarnett{
    background-size: 150%;
  }
`

const TeamList = Styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  ${({ theme }) => theme.forTabletLandscapeUp`
  flex-flow: row wrap;
    justify-content: space-around;
  `}
`;

const TeamItem = Styled.div`
  margin: 20px;
  ${({ theme }) => theme.forTabletLandscapeUp`
    margin: 30px;
  `}
`;

const TeamMember = ({ toggleModal, heading, teamMemberData, theme }) => {
  const itemLength = teamMemberData.length

  let rows = [];
  if (itemLength === 5) {
    const row = [[], []]
    for (const i in teamMemberData) {
      i < 2 ? row[0].push(teamMemberData[i]) : row[1].push(teamMemberData[i]);
    }
    rows = [...row];
  }

  if (itemLength === 7) {
    const row = [[], [], []]
    for (const i in teamMemberData) {
      i < 2 ? row[0].push(teamMemberData[i]) : i < 5 ? row[1].push(teamMemberData[i]) : row[2].push(teamMemberData[i]);
    }
    rows = [...row];
  }

  let team;

  if (itemLength < 3) {
    team =
      <CollectionList>
        {teamMemberData.map((item, i) => {
          return (
            <CollectionItem key={i} id={i} className={item.node.name.split(' ').join('')}>
              <TeamMemberCollectionItemButton onClick={() => toggleModal(
                {
                  image: item.node.image.sizes.src,
                  imageDark: null,
                  title: item.node.name,
                  subtitle: item.node.subtitle,
                  description: item.node.description.description
                },
                theme)}>
                <TeamMemberImage className={item.node.name.split(' ').join('')} image={item.node.image.sizes.src} />
                <CollectionItemTitle>{item.node.name}</CollectionItemTitle>
                <CollectionItemSubtitle>{item.node.title}</CollectionItemSubtitle>
              </TeamMemberCollectionItemButton>
            </CollectionItem>
          )
        }
        )}
      </CollectionList>
  } else {
    team =
      rows.map((subRows, i) => (
        <TeamList key={i}>
          {
            subRows.map((item, i) => {
              return (
                <TeamItem key={i} id={i} className={item.node.name.split(' ').join('')}>
                  <TeamMemberCollectionItemButton onClick={() => toggleModal(
                    {
                      image: item.node.image.sizes.src,
                      imageDark: null,
                      title: item.node.name,
                      subtitle: item.node.subtitle,
                      description: item.node.description.description
                    },
                    theme)}>
                    <TeamMemberImage className={item.node.name.split(' ').join('')} image={item.node.image.sizes.src} />
                    <CollectionItemTitle>{item.node.name}</CollectionItemTitle>
                    <CollectionItemSubtitle>{item.node.title}</CollectionItemSubtitle>
                  </TeamMemberCollectionItemButton>
                </TeamItem>
              )
            })
          }
        </TeamList>
      ))
  }


  return (
    <CollectionContainer id='team'>
      <CollectionSVGContainer source={heading} className="collection-header" />
      {team}
    </CollectionContainer>

  )
}

export default TeamMember