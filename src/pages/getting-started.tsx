import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Page from '../components/layouts/base'

import {
  EuiFlexGroup,
  EuiFlexGrid,
  EuiFlexItem,
  EuiHeaderBreadcrumbs,
  EuiLink,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui'
import MissionCard from '../components/cards/missionCard'
import PopularContentCard from '../components/cards/popularContentCard'

const Container = styled.section`
  max-width: 1280px;
  padding: ${(props) => props.theme.sizes.sizeL}};
  margin: 0 auto;
`

const headerBreadcrumbs = (
  <EuiHeaderBreadcrumbs
    breadcrumbs={[
      {
        text: 'Documentation',
        href: '/'
      },
      {
        text: 'Getting started',
      },
    ]}
  />
)

const Index: FunctionComponent = () => (
  <>
    <Page
      title='Welcome to Elastic Docs'
      searchSpacerSize='xxl'
      subtitle={true}
      pageBreadcrumbs={headerBreadcrumbs}
      >
      <EuiSpacer size='xxl' />

      <Container>

        <EuiTitle><h2>Getting started</h2></EuiTitle>
        <EuiFlexGroup gutterSize='xl' direction='column'>
          <EuiFlexItem>
            <EuiFlexGrid columns={3} gutterSize='xl'>
              <EuiFlexItem>
                <MissionCard
                  description='Start ingesting and visualising your data with Elasticsearch in minutes.'
                  imageSrc='https://gareth-misc.s3.amazonaws.com/welcome-blue.svg'
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <MissionCard
                  title='Adding search to your site'
                  description='Easily add a search bar to your website or native app.'
                  imageSrc='https://gareth-misc.s3.amazonaws.com/add-search.svg'
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <MissionCard
                  title='Observing your logs &amp; metrics'
                  description='Ingest your logs and start querying in no time at all.'
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <MissionCard
                  title='Protecting your data &amp; employees'
                  description='Get started with Endpoint security, SIEM, threat hunting and more.'
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <MissionCard
                  title='Account and Billing'
                  description='Understand your bills, add new users and roles.'
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <MissionCard
                  title='API reference'
                  description='Vier Elasticsearch and Cloud public API reference materials.'
                />
              </EuiFlexItem>
            </EuiFlexGrid>
          </EuiFlexItem>

          <EuiSpacer size='xl' />
          <EuiFlexItem>
            <EuiFlexGroup gutterSize='s' direction='column'>
              <EuiFlexItem>
                <EuiTitle size='xs'>
                  <h3>Recently visited</h3>
                </EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFlexGrid columns={4}>
                  <EuiFlexItem grow={false}>
                    <Link href='/docs/'>
                      <EuiLink>
                        Ingesting data with Node.js on Elastic Cloud
                      </EuiLink>
                    </Link>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <Link href='/docs/'>
                      <EuiLink>Ruby and Rails Integrations</EuiLink>
                    </Link>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <Link href='/docs/'>
                      <EuiLink>enterprise-search-ruby</EuiLink>
                    </Link>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <Link href='/docs/'>
                      <EuiLink>APM Ruby Agent Reference</EuiLink>
                    </Link>
                  </EuiFlexItem>
                </EuiFlexGrid>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiFlexGroup direction='column'>
              <EuiFlexItem>
                <EuiTitle size='xs'>
                  <h3>Popular content</h3>
                </EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFlexGrid columns={2} gutterSize='xl'>
                  <EuiFlexItem>
                    <PopularContentCard />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <PopularContentCard />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <PopularContentCard
                      product='Enterprise Search'
                      color='#F04E98'
                    />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <PopularContentCard />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <PopularContentCard />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <PopularContentCard
                      product='Enterprise Search'
                      color='#F04E98'
                    />
                  </EuiFlexItem>
                </EuiFlexGrid>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </Container>
    </Page>
  </>
)

export default Index
