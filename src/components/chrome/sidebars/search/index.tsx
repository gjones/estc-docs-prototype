import React from 'react'
import styled from 'styled-components'

import {
  EuiButtonGroup,
  EuiFacetButton,
  EuiFacetGroup,
  EuiFlexGroup,
  EuiHorizontalRule,
  EuiFlexItem,
  EuiSpacer,
} from '@elastic/eui'

export default function SearchSidebar() {
  const typeList = [
    {
      id: 'facet0',
      label: 'Guides',
      quantity: 64,
    },
    {
      id: 'facet1',
      label: 'API reference',
      quantity: 122,
    },
  ]

  const productList = [
    {
      id: 'facet0',
      label: 'Elasticsearch',
      quantity: 23,
    },
    {
      id: 'facet1',
      label: 'Elastic Cloud',
      quantity: 16,
    },
    {
      id: 'facet2',
      label: 'Kibana',
      quantity: 12,
    },
    {
      id: 'facet3',
      label: 'Observability',
      quantity: 8,
    },
    {
      id: 'facet4',
      label: 'Security',
      quantity: 7,
    },
    {
      id: 'facet5',
      label: 'APM',
      quantity: 5,
    },
    {
      id: 'facet5',
      label: 'Metricbeat',
      quantity: 6,
    },
  ]

  return (
    <Wrapper>
      <EuiSpacer size='xxl' />
      <EuiSpacer size='xxl' />
      <EuiFlexGroup direction='column'>
        <EuiFlexItem>
          <EuiButtonGroup
            type='single'
            legend='me'
            color='primary'
            buttonSize='compressed'
            name='results type'
            options={[
              {
                id: '1',
                label: 'Relevance',
              },
              {
                id: '2',
                label: 'Published',
              },
            ]}
            idSelected='1'
            onChange={() => {}}
          />
        </EuiFlexItem>
        <EuiHorizontalRule margin='s' />
        <EuiFlexItem>
          <EuiFacetGroup>
            {typeList.map((item, index) => (
              <EuiFacetButton key={index} id={item.id} quantity={item.quantity}>
                {item.label}
              </EuiFacetButton>
            ))}
          </EuiFacetGroup>
        </EuiFlexItem>
        <EuiHorizontalRule margin='s' />
        <EuiFlexItem>
          <EuiFacetGroup>
            {productList.map((item, index) => (
              <EuiFacetButton key={index} id={item.id} quantity={item.quantity}>
                {item.label}
              </EuiFacetButton>
            ))}
          </EuiFacetGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 ${(props: any) => props.theme.sizes.sizeXL};
`
