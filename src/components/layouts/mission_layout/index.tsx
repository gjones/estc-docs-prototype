import React, { Fragment, Component } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPage,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageBody,
  EuiPanel,
  EuiSpacer,
} from '@elastic/eui'

import Header from '../../chrome/header'
import Footer from '../../chrome/footer'
import SearchBarArea from '../../chrome/searchBar'

type Props = {
  title: string
  subtitle: boolean
  searchSpacerSize: any
  pageBreadcrumbs: any
  backgroundColour: string
}

export default class MissionLayout extends Component<Props> {
  static defaultProps = {
    backgroundColour: '#FFF',
    title: 'Elastic Docs',
    searchSpacerSize: 'xxl',
    subtitle: true,
  }

  render() {
    const {
      title,
      subtitle,
      searchSpacerSize,
      pageBreadcrumbs,
      backgroundColour,
    } = this.props

    const PageWrap = styled.div`
      .euiPage {
        background: ${backgroundColour};
      }
    `

    return (
      <Fragment>
        <Head>
          <title>{title}</title>
          <link
            rel='icon'
            href='https://gareth-misc.s3.amazonaws.com/favicon-32x32.png'
            type='image/png'></link>
        </Head>
        <Header breadcrumbs={pageBreadcrumbs} />
        <PageWrap>
          <EuiPage paddingSize='none'>
            <EuiPageBody>
              <SearchBarArea
                placeholder='Search tutorials, API references, example code and more...'
                subtitle={subtitle}
                spacerSize={searchSpacerSize}
              />
              <EuiPageContent
                hasBorder={false}
                hasShadow={false}
                paddingSize='none'
                color='transparent'
                borderRadius='none'>
                <EuiPageContentBody>
                  <FeatureBackground>
                    <EuiSpacer size='xxl' />
                    <EuiSpacer size='xxl' />
                    <Container>
                      <EuiFlexGroup>
                        <EuiFlexItem>
                          <EuiSpacer size='m' />
                          <GuideWrapper>
                            <EuiPanel paddingSize='none'>
                              <ContentWrapper>
                                {this.props.children}
                              </ContentWrapper>
                            </EuiPanel>
                          </GuideWrapper>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </Container>
                  </FeatureBackground>
                </EuiPageContentBody>
              </EuiPageContent>
              <EuiSpacer size='xxl' />
            </EuiPageBody>
          </EuiPage>
        </PageWrap>
        <Footer />
      </Fragment>
    )
  }
}

const FeatureBackground = styled.div`
  margin: 0 auto;
  background: ${(props: any) => props.theme.feature.background};
`

const Container = styled.section`
  max-width: 72em;
  min-height: 70vh;
  padding: ${(props: any) => props.theme.sizes.sizeL};
  margin: 0 auto;
`
const GuideWrapper = styled.div`
  .euiPanel {
    background: #fff
      url('https://gareth-misc.s3.amazonaws.com/abstract/pink-grey-corner.svg')
      no-repeat;
    background-position-y: top;
    background-position-x: 0;
    width: 100%;

    h1 {
      text-align: center;
    }
  }
`

const ContentWrapper = styled.div`
  max-width: 85%;
  margin: 0 auto;
`
