import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiIcon,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui'

export default function SuggestionItem(props: any) {
  const { icon, title, excerpt, slug } = props

  return (
    <Link key={slug} href='/docs/[slug]' as={`/docs/${slug}`}>
      <SearchResult>
        <EuiSpacer size='m' />
        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup direction='column' gutterSize='xl'>
              <EuiFlexItem grow={false}>
                <EuiPanel hasShadow={true}>
                  <EuiIcon type={icon} size='l' />
                </EuiPanel>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiTitle size='xxs'>
              <h4>{title}</h4>
            </EuiTitle>
            <EuiText color='subdued' size='s'>
              <p>{excerpt}</p>
            </EuiText>
            <EuiSpacer size='l' />
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiHorizontalRule margin='none' />
      </SearchResult>
    </Link>
  )
}

SuggestionItem.defaultProps = {
  icon: 'logoElasticsearch',
  title: 'Getting started with Elasticsearch',
  excerpt:
    'This guide tells you how to get started with: Securely connecting to Elasticsearch Service with Node.js. Ingesting data into your deployment from...',
  slug: 'ingest-data-with-nodejs/'
}

const SearchResult = styled.div`
  margin-top: -16px;
  padding: 0 ${(props) => props.theme.sizes.sizeM};
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colours.light_lightestShade};
    transition: all ease-in-out 0.2s;

    .euiTitle {
      color: ${(props) => props.theme.text.link};
    }
  }
  .euiPanel {
    padding: 8px;
  }
`
