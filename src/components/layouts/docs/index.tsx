import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import Header from '../../header'
import SearchBarArea from '../../searchBar'

import {
  EuiPage,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageSideBar,
  EuiPageBody,
  EuiSpacer,
} from '@elastic/eui'

type Props = {
  title: string
  description: string
  largeHeadline: string
  children: any
}

export default class DocPage extends Component<Props> {
  render() {
    const { title } = this.props
    let sideNav = (
      <Fragment>
        <EuiSpacer size='xxl' />
        <p>Remember to add a sidenav</p>
      </Fragment>
    )

    return (
      <Fragment>
        <Header />
        <SearchBarArea
          placeholder='Search tutorials, API references, example code and more...'
          subtitle={false}
          spacerSize='m'
        />
        <EuiPage paddingSize='none'>
          <EuiPageSideBar sticky>{sideNav}</EuiPageSideBar>
          <EuiPageBody panelled>
            <EuiSpacer size='xxl' />
            <EuiPageHeader restrictWidth pageTitle={title} />
            <EuiPageContent
              hasBorder={false}
              hasShadow={false}
              paddingSize='none'
              color='transparent'
              borderRadius='none'>
              <EuiPageContentBody restrictWidth>
                <Link href='/docs/'>Back to results</Link>
                <EuiSpacer />
                {this.props.children}
              </EuiPageContentBody>
            </EuiPageContent>
          </EuiPageBody>
        </EuiPage>
      </Fragment>
    )
  }
}
