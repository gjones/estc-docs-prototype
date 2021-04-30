import React, { Fragment, Component } from 'react'
import Head from 'next/head'

import {
  EuiHeaderBreadcrumbs,
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
}

export default class Page extends Component<Props> {
  render() {
    const { title, subtitle, searchSpacerSize, pageBreadcrumbs } = this.props

    return (
      <Fragment>
        <Head>
          <title>{title}</title>
        </Head>
        <Header breadcrumbs={pageBreadcrumbs} />
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
                <EuiSpacer size='xxl' />
                {this.props.children}
              </EuiPageContentBody>
            </EuiPageContent>
            <EuiSpacer size='xxl' />
          </EuiPageBody>
        </EuiPage>
        <Footer />
      </Fragment>
    )
  }
}
