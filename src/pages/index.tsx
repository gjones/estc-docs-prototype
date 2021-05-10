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
import DxMissionCard from '../components/cards/dxMissionCard'
import PopularContentCard from '../components/cards/popularContentCard'
import DxLink from '../components/links/dxLinks'

const FeatureBackground = styled.div`
  margin: 0 auto;
  background: ${(props) => props.theme.feature.background}};
`

const Container = styled.section`
  max-width: 1280px;
  padding: ${(props) => props.theme.sizes.sizeL}};
  margin: 0 auto;
`

const SupportSection = styled.section`
  text-align: center;
  .euiTitle {
    font-weight: ${(props) => props.theme.fontWeights.fontExtraBold};
  }
`

const headerBreadcrumbs = (
  <EuiHeaderBreadcrumbs
    breadcrumbs={[
      {
        text: 'Documentation',
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
      pageBreadcrumbs={headerBreadcrumbs}>
      <FeatureBackground>
        <EuiSpacer size='xxl' />
        <EuiSpacer size='xxl' />
        <Container>
          <EuiFlexGroup gutterSize='xl' direction='column'>
            <EuiFlexItem>
              <EuiFlexGrid columns={3} gutterSize='xl'>
                <EuiFlexItem>
                  <DxMissionCard
                    description='New in town? Not to worry, we’ll give you the tour, get up and running ingesting your data in just a few minutes.'
                    imageSrc='https://gareth-misc.s3.amazonaws.com/welcome-blue.svg'
                    link='/getting-started/'
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <DxMissionCard
                    title='Adding search to your website'
                    description='We’ll walk you through how you can easily add a search bar to your website or native app.'
                    imageSrc='https://gareth-misc.s3.amazonaws.com/welcome-pink.svg'
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <DxMissionCard
                    title='Observing your logs &amp; metrics'
                    description='Ingest logs and metrics from thousands of different services. Start querying, and visualising them in no time at all. '
                    imageSrc='https://gareth-misc.s3.amazonaws.com/welcome-green.svg'
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <DxMissionCard
                    title='Protecting your data &amp; employees'
                    description='Get started with Endpoint security, SIEM, threat hunting and more.'
                    imageSrc='https://gareth-misc.s3.amazonaws.com/welcome-blue.svg'
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <DxMissionCard
                    title='Account, Organizations, and Billing'
                    description='Understand your bills, add new users and roles.'
                    imageSrc='https://gareth-misc.s3.amazonaws.com/welcome-pink.svg'
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <DxMissionCard
                    title='API Reference and Language clients'
                    description='View Elasticsearch and Cloud public API reference materials.'
                    imageSrc='https://gareth-misc.s3.amazonaws.com/welcome-green.svg'
                  />
                </EuiFlexItem>
              </EuiFlexGrid>
            </EuiFlexItem>

            <EuiSpacer size='s' />
            <EuiFlexItem>
              <EuiFlexGroup gutterSize='s' direction='column'>
                <EuiFlexItem>
                  <EuiTitle size='s'>
                    <h3>Recently visited</h3>
                  </EuiTitle>
                  <EuiSpacer size='s' />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFlexGrid columns={4} gutterSize='xl'>
                    <EuiFlexItem grow={false}>
                      <DxLink />
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <DxLink title='Ruby on Rails integrations' />
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <DxLink title='Plugin: enterprise-search-ruby' />
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <DxLink title='APM Ruby Agent Reference' />
                    </EuiFlexItem>
                  </EuiFlexGrid>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer size='m' />
            </EuiFlexItem>
          </EuiFlexGroup>
        </Container>
      </FeatureBackground>
      <Container>
        <EuiFlexGroup direction='column'>
          <EuiFlexItem>
            <EuiFlexGroup direction='column'>
              <EuiSpacer size='m' />
              <EuiFlexItem>
                <EuiTitle size='s'>
                  <h3>May's popular content</h3>
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
                      product='Elastic Security'
                      icon='logoSecurity'
                      title='Intro to threat hunting'
                    />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <PopularContentCard
                      product='Elastic Observability'
                      icon='logoObservability'
                      title='Viewing Nginx production logs'
                    />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <PopularContentCard />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <PopularContentCard
                      product='Elastic Enterprise Search'
                      icon='logoEnterpriseSearch'
                      title='Getting started with workplace search'
                    />
                  </EuiFlexItem>
                </EuiFlexGrid>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>

          <EuiFlexItem>
            <SupportSection>
              <EuiSpacer />
              <EuiTitle size='s'>
                <h3>Need support? Find us in the following places</h3>
              </EuiTitle>
              <EuiSpacer size='s' />
              <p>
                <Link href='#'>Elastic Support</Link> /{' '}
                <Link href='#'>Discuss forums</Link> /{' '}
                <Link href='#'>Stack Overflow</Link>
              </p>
            </SupportSection>
          </EuiFlexItem>
        </EuiFlexGroup>
      </Container>
    </Page>
  </>
)

export default Index
