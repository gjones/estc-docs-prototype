import React from 'react'
import styled from 'styled-components'

import { EuiSideNav, EuiSpacer } from '@elastic/eui'

export default function ArticleSidebar() {
  return (
    <Wrapper>
      <EuiSpacer size='xxl' />
      <EuiSideNav
        mobileTitle='Doc sidebar'
        items={[
          {
            name: 'Getting started',
            id: 0,
            items: [
              {
                name: 'Introduction to Elastic Cloud',
                id: 1,
              },
              {
                name: 'Your first integration',
                id: 2,
                href: '#',
                items: [
                  {
                    name: 'Selecting your services',
                    id: '1.1.2.1',
                  },
                  {
                    name: 'Ingesting different data',
                    id: '1.1.2.1',
                  },
                  {
                    name: 'Ingesting data with Node.js',
                    id: '1.1.2.2',
                    isSelected: true,
                  },
                ],
              },
              {
                name: 'Visualising your data',
                id: 3,
              },
              {
                name: 'Inviting colleagues',
                id: 4,
              },
              {
                name: 'Scaling your deployment',
                id: 5,
              },
            ],
          },
        ]}
      />

      <EuiSpacer size='xxl' />
      <EuiSideNav
        mobileTitle='Doc sidebar'
        items={[
          {
            name: "Related to 'Ingest data'",
            id: 0,
            items: [
              {
                name: 'Ingesting data with Python',
                id: 1,
              },
              {
                name: 'Indexing documents',
                id: 2,
              },
              {
                name: 'Ingest data to Elastic Security',
                id: 3,
              },
              {
                name: 'Ingest data to Splunk',
                id: 4,
              },
            ],
          },
        ]}
      />

      <EuiSpacer size='xxl' />
      <EuiSideNav
        mobileTitle='Doc sidebar'
        items={[
          {
            name: "Related to 'Node.js'",
            id: 0,
            items: [
              {
                name: 'Upgrading Node.js',
                id: 1,
              },
              {
                name: 'APM Node.js Agent Reference',
                id: 2,
              },
              {
                name: 'Get started with a customer Node.js stack',
                id: 3,
              },
              {
                name: 'Get started with Express',
                id: 4,
              },
              {
                name: 'Get started with Restify',
                id: 5,
              },
            ],
          },
        ]}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 ${(props: any) => props.theme.sizes.sizeXL};
`
