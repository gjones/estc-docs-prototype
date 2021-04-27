import React, { Component } from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import {
  EuiPage,
  EuiPageBody,
} from '@elastic/eui'

import Header from '../../header'
import SearchBarArea from '../../searchBar'


export default class Page extends Component {
  render() {
    return (
      <EuiPage paddingSize='none'>
        <Head>
          <title>Elastic Docs Prototype</title>
        </Head>
        <EuiPageBody>
          <Header />
          <SearchBarArea placeholder='Search tutorials, API references, example code and more...' />
          {this.props.children}
        </EuiPageBody>
      </EuiPage>
    )
  }
}
