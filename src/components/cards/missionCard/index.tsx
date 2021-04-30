import React from 'react'

import { EuiCard } from '@elastic/eui'

type Props = {
  title: string
  description: string
  imageSrc: string
  link: string
}

export default function MissionCard(props: Props) {
  const { title, description, imageSrc, link } = props

  return (
    <EuiCard
      image={imageSrc}
      title={title}
      description={description}
      href={link}
    />
  )
}

MissionCard.defaultProps = {
  title: 'Getting started',
  description: 'Here is the description',
  imageSrc: 'https://gareth-misc.s3.amazonaws.com/getting-started.svg',
  link: '/docs/',
}
