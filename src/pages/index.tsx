import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Page from '../components/layouts/base'

import {
  EuiFlexGroup,
  EuiFlexGrid,
  EuiFlexItem,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui'
import MissionCard from '../components/cards/missionCard'
import SearchBarArea from '../components/searchBar'
import PopularContentCard from '../components/cards/popularContentCard'

const Container = styled.section`
  max-width: 1240px;
  padding: ${(props) => props.theme.sizes.sizeL}};
  margin: 0 auto;
`

const Index: FunctionComponent = () => (
  <>
    <Page>
      <EuiSpacer size='xxl' />

      <Container>
        <EuiFlexGroup gutterSize='xl' direction='column'>
          <EuiFlexItem>
            <EuiFlexGroup justifyContent='spaceEvenly'>
              <EuiFlexItem>
                <MissionCard description='Start ingesting and visualising your data with Elasticsearch in minutes.' />
              </EuiFlexItem>
              <EuiFlexItem>
                <MissionCard />
              </EuiFlexItem>
              <EuiFlexItem>
                <MissionCard />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiFlexGroup direction='column'>
              <EuiFlexItem>
                <EuiTitle size='xxs'>
                  <h3>Popular content</h3>
                </EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFlexGrid columns={3}>
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
