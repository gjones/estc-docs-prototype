import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import {
  EuiBadge,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from '@elastic/eui'

export default function DocCard(props: any) {
  const { icon, title, excerpt, date, tags, slug } = props

  return (
    <Link key={slug} href='/docs/[slug]' as={`/docs/${slug}`}>
      <SearchResult>
        <EuiSpacer size='m' />
        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup direction='column'>
              <EuiFlexItem grow={false}>
                <EuiPanel hasShadow={true}>
                  <EuiIcon type={icon} size='l' />
                </EuiPanel>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText style={{ fontWeight: 500 }}>
              <p>{title}</p>
            </EuiText>
            <EuiText color='subdued' size='s'>
              <p>{excerpt}</p>
            </EuiText>
            <EuiSpacer size='s' />
            <EuiText color='subdued' size='xs'>
              <p>{date}</p>
            </EuiText>
            <EuiSpacer size='m' />
            <EuiFlexGroup gutterSize='s'>
              {tags.map((tags, index) => (
                <EuiFlexItem grow={false} key={index}>
                  <EuiBadge color='hollow'>{tags}</EuiBadge>
                </EuiFlexItem>
              ))}
            </EuiFlexGroup>
            <EuiSpacer size='m' />
          </EuiFlexItem>
        </EuiFlexGroup>
      </SearchResult>
    </Link>
  )
}

DocCard.defaultProps = {
  icon: 'logoElasticsearch',
  title: 'Ingest data with Node.js on Elasticsearch',
  excerpt:
    'This guide tells you how to get started with: Securely connecting to Elasticsearch Service with Node.js. Ingesting data into your deployment...',
  date: 'December 17,2020',
  tags: ['ingesting data', 'nodejs'],
  slug: 'ingest-data-with-nodejs',
}

const SearchResult = styled.div`
  padding: ${(props) => props.theme.sizes.sizeM};
  border-bottom: 1px solid
    ${(props: any) => props.theme.colours.light_lightestShade};
  border-radius: 4px;
  max-width: 96%;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colours.light_lightestShade};
    transition: all ease-in-out 0.2s;

    .euiTitle {
      color: ${(props) => props.theme.text.link};
      transition: ease-in-out 0.3s color;
    }
  }
  .euiPanel {
    padding: 4px;
  }
`
