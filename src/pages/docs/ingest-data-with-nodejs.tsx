import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Page from '../../components/layouts/base'

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiTitle,
  EuiText,
} from '@elastic/eui'

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
            <EuiFlexGroup direction='column'>
              <EuiFlexItem>
                <EuiTitle size='l'>
                  <h1>Ingest data with Node.js on Elastic Cloud</h1>
                </EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText>
                  <p>
                    This guide tells you how to get started with: Securely
                    connecting to Elasticsearch Service with Node.js Ingesting
                    data into your deployment from your application Searching
                    and modifying your data on Elasticsearch Service If you are
                    an Node.js application programmer who is new to the Elastic
                    Stack, this content can help you get started more easily.
                    Time required: 45 minutes Prerequisites These steps are
                    applicable to your existing application. If you don’t have
                    one, you can use the example included here to create one.
                  </p>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </Container>
    </Page>
  </>
)

export default Index
