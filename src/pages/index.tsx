import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Page from '../components/layouts/base_layout'
import IconLink from '../components/chrome/links/icon_link'
import MissionCard from '../components/cards/mission_card'
import DocCard from '../components/cards/doc_card'

import {
  EuiFlexGroup,
  EuiFlexGrid,
  EuiFlexItem,
  EuiHeaderBreadcrumbs,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui'

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
                  <MissionCard />
                </EuiFlexItem>
                <EuiFlexItem>
                  <MissionCard
                    title='Adding search to your website'
                    description='We’ll walk you through how to quickly and easily add a search experience to your website or native app.'
                    imgSrc='https://gareth-misc.s3.amazonaws.com/abstract/green-circle.svg'
                    backgroundX='80%;'
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <MissionCard
                    title='Observing your logs &amp; metrics'
                    description='Ingest logs and metrics from thousands of different services. Start querying, and visualising them in no time at all. '
                    imgSrc='https://gareth-misc.s3.amazonaws.com/abstract/grey-edging.svg'
                    backgroundX='100%;'
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <MissionCard
                    title='Protecting your data &amp; employees'
                    description='Get started with Endpoint security, SIEM, threat hunting and more.'
                    imgSrc='https://gareth-misc.s3.amazonaws.com/abstract/orange-shape.svg'
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <MissionCard
                    title='Account, Organizations, and Billing'
                    description='Understand your bills, add new users and roles.'
                    imgSrc='https://gareth-misc.s3.amazonaws.com/abstract/blue-circle.svg'
                    backgroundX='60%;'
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <MissionCard
                    title='API Reference and Language clients'
                    description='View Elasticsearch and Cloud public API reference materials.'
                    imgSrc='https://gareth-misc.s3.amazonaws.com/abstract/green-pink-circle.svg'
                    backgroundX='20%;'
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
                  <EuiSpacer size='m' />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFlexGrid columns={4} gutterSize='xl'>
                    <EuiFlexItem grow={false}>
                      <IconLink />
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <IconLink title='Ruby on Rails integrations' />
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <IconLink title='Plugin: enterprise-search-ruby' />
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <IconLink title='APM Ruby Agent Reference' />
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
            <EuiFlexGroup direction='column' gutterSize='l'>
              <EuiSpacer size='m' />
              <EuiFlexItem>
                <EuiTitle size='s'>
                  <h3>May&lsquo;s popular content</h3>
                </EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFlexGrid columns={2} gutterSize='none'>
                  <EuiFlexItem>
                    <DocCard index='1000' />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <DocCard slug='indexing-documents/' index='1001' />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <DocCard
                      product='Elastic Security'
                      icon='logoSecurity'
                      title='Intro to threat hunting'
                      tags={['siem', 'threat hunting']}
                      slug='blizzard-data-pipeline/'
                      index='1002'
                    />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <DocCard
                      product='Elastic Observability'
                      icon='logoObservability'
                      title='Viewing Nginx production logs'
                      slug='ingest-data-with-python/'
                      index='1003'
                    />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <DocCard slug='ingest-data-from-splunk/' index='1004' />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <DocCard
                      product='Elastic Enterprise Search'
                      icon='logoEnterpriseSearch'
                      title='Getting started with workplace search'
                      slug='this-week-in-kibana/'
                      index='1005'
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
