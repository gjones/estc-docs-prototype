import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { EuiPanel, EuiText, EuiTitle } from '@elastic/eui'

type Props = {
  title: string
  description: string
  product: string
  link: string
  color: string
}


export default function PopularContentCard(props: Props) {
  const { product, color, title, description, link } = props

  const ProductTitle = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.fontBold}};
  color: ${color}};
`

  return (
    <Link href={link}>
      <EuiPanel>
        <ProductTitle color={color}>
          {product}
        </ProductTitle>
        <EuiTitle size='xs'>
          <h5>{title}</h5>
        </EuiTitle>
        <EuiText size='s' color='subdued'>
          <p>{description}</p>
        </EuiText>
      </EuiPanel>
    </Link>
  )
}

PopularContentCard.defaultProps = {
  product: 'Elasticsearch',
  title: 'Ingest data with Node.js on Elastic Cloud',
  description: 'This guide tells you how to get started with: Securely connecting to Elasticsearch Service with Node.js Ingesting...',
  link: '/docs/ingest-data-with-nodejs/',
  color: '#00BFB3',
}
