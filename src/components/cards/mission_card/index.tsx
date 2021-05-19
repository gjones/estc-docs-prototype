import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { EuiPanel, EuiSpacer, EuiText, EuiTitle } from '@elastic/eui'

export default function MissionCard(props: any) {
  const { title, description, imgSrc, link, backgroundX } = props

  const AbstractImg = styled.div`
    background: url(${imgSrc}) no-repeat;
    background-position-y: top;
    background-position-x: ${backgroundX};
    width: 100%;
    height: 10rem;
  `

  return (
    <Link href={link}>
      <EuiPanel paddingSize='none'>
        <AbstractImg />
        <MissionPanelContent>
          <EuiTitle size='xs'>
            <h4>{title}</h4>
          </EuiTitle>
          <EuiSpacer size='s' />
          <EuiText size='s'>
            <Description>{description}</Description>
          </EuiText>
        </MissionPanelContent>
      </EuiPanel>
    </Link>
  )
}

MissionCard.defaultProps = {
  title: 'Getting started with Elastic',
  description:
    'New in town? Not to worry, we’ll give you the tour, get up and running ingesting your data in just a few minutes.',
  imgSrc: 'https://gareth-misc.s3.amazonaws.com/abstract/pink-layer.svg',
  link: '/missions/getting-started',
  backgroundX: '0',
}

const MissionPanelContent = styled.div`
  text-align: center;
  padding: 0 ${(props: any) => props.theme.sizes.sizeL};
`
const Description = styled.p`
  min-height: 7rem;
`
