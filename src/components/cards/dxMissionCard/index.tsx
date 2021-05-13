import React from 'react'
import styled from 'styled-components'

import { EuiCard } from '@elastic/eui'

type Props = {
  title: string
  description: string
  imageSrc: string
  link: string
}

const DxCard = styled.div`
  max-width: 25rem;

  .euiPanel {
    box-shadow: none;
    border-radius: ${(props) => props.theme.borderRadius.radiusL};
  }
  .euiCard__image {
    border-top-left-radius: ${(props) => props.theme.borderRadius.radiusL};
    border-top-right-radius: ${(props) => props.theme.borderRadius.radiusL};
  }
  .euiCard__content {
    width: 85%;
    @media only screen and ${(props) =>
        props.theme.mediaQueries.mediumScreens} {
      width: 95%;
    }
  }
  .euiCard__title {
    display: flex;
    font-weight: ${(props) => props.theme.fontWeights.fontExtraBold};
    justify-content: center;
    border-bottom: 1px solid ${(props) => props.theme.card.borderColour};
    padding-bottom: ${(props) => props.theme.sizes.sizeS};
    margin-bottom: ${(props) => props.theme.sizes.sizeM};
  }
  .euiCard__description {
    min-height: 7rem;
  }
`

export default function DxMissionCard(props: Props) {
  const { title, description, imageSrc, link } = props

  return (
    <DxCard>
      <EuiCard
        image={imageSrc}
        title={title}
        description={description}
        href={link}
      />
    </DxCard>
  )
}

DxMissionCard.defaultProps = {
  title: 'Getting started with Elastic',
  description: 'Here is the description',
  imageSrc: 'https://gareth-misc.s3.amazonaws.com/getting-started.svg',
  link: '/docs/',
}
