import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import Header from '../../header'
import Footer from '../../footer'
import SearchBarArea from '../../searchBar'

import {
  EuiPage,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageSideBar,
  EuiPageBody,
  EuiSpacer,
  EuiText,
} from '@elastic/eui'

type Props = {
  title: string
  pageBreadcrumbs: any
  children: any
}

const ContentWrapper = styled.section`
  min-height: 80vh;
`

export default class DocPage extends Component<Props> {
  render() {
    const { title, pageBreadcrumbs } = this.props
    let sideNav = (
      <Fragment>
        <EuiSpacer size='xxl' />
        <p>Remember to add a sidenav</p>
      </Fragment>
    )

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
          subtitle={false}
          spacerSize='m'
        />
        <EuiPage paddingSize='none'>
          <EuiPageSideBar sticky>{sideNav}</EuiPageSideBar>
          <EuiPageBody panelled>
            <EuiSpacer size='xxl' />
            <EuiSpacer size='xxl' />
            <EuiPageHeader restrictWidth pageTitle={title} />
            <ContentWrapper>
              <EuiPageContent
                hasBorder={false}
                hasShadow={false}
                paddingSize='none'
                color='transparent'
                borderRadius='none'>
                <EuiPageContentBody restrictWidth>
                  <Link href='/docs/'>Back to results</Link>
                  <EuiSpacer />
                  <EuiText>{this.props.children}</EuiText>
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
