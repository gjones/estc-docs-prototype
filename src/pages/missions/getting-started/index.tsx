import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import {
  EuiFlexGroup,
  EuiFlexGrid,
  EuiFlexItem,
  EuiHeaderBreadcrumbs,
  EuiHorizontalRule,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui'

import MissionLayout from '../../../components/layouts/mission_layout'
import MissionStep from '../../../components/steps/mission_step'

export default function GettingStarted() {
  const headerBreadcrumbs = (
    <EuiHeaderBreadcrumbs
      breadcrumbs={[
        {
          text: 'Documentation',
          href: '/',
        },
        {
          text: 'Missions',
          href: '/missions/',
        },
        {
          text: 'Getting Started',
        },
      ]}
    />
  )

  return (
    <MissionLayout
      title='Getting started with Elastic'
      searchSpacerSize='xxl'
      subtitle={true}
      pageBreadcrumbs={headerBreadcrumbs}>
      <EuiFlexGroup direction='column' gutterSize='xl'>
        <EuiFlexItem>
          <EuiSpacer size='xxl' />
          <EuiTitle>
            <h1>Getting started with Elastic</h1>
          </EuiTitle>
          <EuiSpacer size='xxl' />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFlexGrid columns={2} gutterSize='s'>
            <EuiFlexItem>
              <MissionStep
                stepNumber='1'
                title='Getting started with Elastic Cloud'
                description='Sign up for our hosted Elasticsearch offering and get your first 14 days for free.'
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <MissionStep
                stepNumber='2'
                title='Your first integration'
                description='Choose between hundreds of services and start importing your data into Elasticsearch.'
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <MissionStep
                stepNumber='3'
                title='Visualising your data'
                description='Use your data to create elegant and intuitive visualisations with Discover and Lens. '
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <MissionStep
                stepNumber='4'
                title='Inviting colleagues'
                description='Add colleagues, assign roles and permissions.'
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <MissionStep
                stepNumber='5'
                title='Scaling your deployment'
                description='Add or remove resources, increase capacity, or learn about autoscaling. '
              />
            </EuiFlexItem>
          </EuiFlexGrid>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFlexGroup>
            <EuiFlexItem>
              <ContentBottom>
                <EuiHorizontalRule />
                <Link href='/'>Return to Docs home</Link>
              </ContentBottom>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size='xxl' />
      <EuiSpacer size='xxl' />
    </MissionLayout>
  )
}

const ContentBottom = styled.div`
  width: 40%;
  margin: 0 auto;
  text-align: center;
`
