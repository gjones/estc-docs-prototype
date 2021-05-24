import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Header from '../../chrome/header'
import Footer from '../../chrome/footer'
import SearchBarArea from '../../chrome/search_bar'

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPage,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageSideBar,
  EuiPageBody,
  EuiSpacer,
} from '@elastic/eui'

import SearchSidebar from '../../chrome/sidebars/search'
import AdCard from '../../cards/ad_cards'

type Props = {
  title: string
  pageBreadcrumbs: any
  children: any
}

const ContentWrapper = styled.section`
  min-height: 80vh;

  pre {
    background: ${(props) => props.theme.text.default};
    color: ${(props) => props.theme.colours.light_emptyShade};
  }
`

export default class SearchLayout extends Component<Props> {
  render() {
    const { title, pageBreadcrumbs } = this.props
    let sideNav = <SearchSidebar />

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
        <SearchBarArea
          placeholder='Search tutorials, API references, example code and more...'
          subtitle={true}
          spacerSize='xxl'
        />
        <EuiPage paddingSize='none'>
          <EuiPageSideBar>{sideNav}</EuiPageSideBar>
          <EuiPageBody panelled>
            <EuiSpacer size='xxl' />
            <ContentWrapper>
              <EuiPageContent
                hasBorder={false}
                hasShadow={false}
                paddingSize='none'
                color='transparent'
                borderRadius='none'>
                <EuiPageContentBody restrictWidth>
                  <EuiFlexGroup gutterSize='xl' justifyContent='spaceBetween'>
                    <EuiFlexItem>
                      <EuiFlexGroup justifyContent='spaceBetween'>
                        <EuiFlexItem>{this.props.children}</EuiFlexItem>
                        <EuiFlexItem grow={false}>
                          <EuiFlexGroup direction='column' gutterSize='xl'>
                            <EuiFlexItem grow={false}>
                              <AdCard title='Elastic Cloud' />
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                              <AdCard
                                title='Elastic Support'
                                description='Get the answers you need from our team of experts. Available 24/7.'
                                imgSrc='https://gareth-misc.s3.amazonaws.com/abstract/yellow-grey-support.svg'
                                imgY='4rem'
                              />
                            </EuiFlexItem>
                          </EuiFlexGroup>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiPageContentBody>
              </EuiPageContent>
            </ContentWrapper>
          </EuiPageBody>
        </EuiPage>
        <Footer />
      </Fragment>
    )
  }
}
