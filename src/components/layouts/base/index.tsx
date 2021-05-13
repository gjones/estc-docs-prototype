import React, { Fragment, Component } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import {
  EuiPage,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageBody,
  EuiSpacer,
} from '@elastic/eui'

import Header from '../../header'
import Footer from '../../footer'
import SearchBarArea from '../../searchBar'

type Props = {
  title: string
  subtitle: boolean
  searchSpacerSize: any
  pageBreadcrumbs: any
  backgroundColour: string
}

export default class Page extends Component<Props> {
  static defaultProps = {
    backgroundColour: '#FFF',
    title: 'Elastic Docs',
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
                <EuiPageContentBody>{this.props.children}</EuiPageContentBody>
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
