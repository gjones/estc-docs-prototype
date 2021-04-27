import React, { Component, Fragment } from 'react'
import Header from '../../header'

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
    let sideNav = <p>Remember to add a sidenav</p>

    return (
      <Fragment>
        <Header />
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
                {this.props.children}
              </EuiPageContentBody>
            </EuiPageContent>
          </EuiPageBody>
        </EuiPage>
      </Fragment>
    )
  }
}
