import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import {
  EuiPage,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageSideBar,
  EuiPageBody,
  EuiSpacer,
} from '@elastic/eui'

import Header from '../../header'
import SearchBarArea from '../../searchBar'

export default class Page extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <EuiPage paddingSize='none'>
          <EuiPageBody>
            <SearchBarArea placeholder='Search tutorials, API references, example code and more...' />
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
