import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import {
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui'

type Props = {
  title: string
  description: string
  product: string
  icon: string
  link: string
  color: string
}

const DxCard = styled.div`
  .euiPanel {
    box-shadow: none;
    border-radius: 14px;
    background: ${(props) => props.theme.card.background};
    padding: ${(props) => props.theme.sizes.sizeL} ${(props) => props.theme.sizes.sizeXXL}
  }
`

const ProductTitle = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.fontBold};
  color: ${(props) => props.theme.title.subtle};
`

export default function DxPopularCard(props: Props) {
  const { product, color, title, icon, description, link } = props

  return (
    <DxCard>
      <Link href={link}>
        <EuiPanel>
          <EuiFlexGroup gutterSize='m' alignItems='center'>
            <EuiFlexItem grow={false}>
              <EuiIcon type={icon} size='l' />
            </EuiFlexItem>
            <EuiFlexItem>
              <ProductTitle color={color}>{product}</ProductTitle>
              <EuiTitle size='xs'>
                <h5>{title}</h5>
              </EuiTitle>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size='s' />
          <EuiText size='s' color='subdued'>
            <p>{description}</p>
          </EuiText>
        </EuiPanel>
      </Link>
    </DxCard>
  )
}

DxPopularCard.defaultProps = {
  product: 'Elasticsearch',
  icon: 'logoElasticsearch',
  title: 'Ingest data with Node.js on Elastic Cloud',
  description:
    'This guide tells you how to get started with: Securely connecting to Elasticsearch Service with Node.js Ingesting...',
  link: '/docs/ingest-data-with-nodejs',
  color: '#00BFB3',
}
