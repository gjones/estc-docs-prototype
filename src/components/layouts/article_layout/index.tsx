import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Header from '../../chrome/header'
import Footer from '../../chrome/footer'
import SearchBarArea from '../../chrome/search_bar'

import { TOCData } from '../../../../data/tocData'

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPage,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageSideBar,
  EuiPageBody,
  EuiSpacer,
  EuiSideNav,
  EuiSelect,
  EuiText,
} from '@elastic/eui'

import ArticleSidebar from '../../chrome/article/sidebar'

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

const ArticleWrapper = styled.div`
  max-width: 94%;
`

const TOC = styled.aside`
    position: sticky;
    top: 9rem;

  .euiSideNav {
    position: sticky;
    top: 2rem;
  }
  .euiSideNav__content {
    background: white;
    border: none;

  }
`

export default class ArticleLayout extends Component<Props> {
  render() {
    const { title, pageBreadcrumbs } = this.props
    let sideNav = <ArticleSidebar />

    let OnThisPageNav = (
      <Fragment>
        <EuiSideNav
          items={TOCData}
        />
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
                      <ArticleWrapper>
                        <EuiFlexGroup
                          justifyContent='spaceBetween'
                          alignItems='center'>
                          <EuiFlexItem grow={false}>
                            <EuiText size='s' color='subdued'>
                              Lasted updated: May 5, 2021
                            </EuiText>
                          </EuiFlexItem>
                          <EuiFlexItem grow={false}>
                            <EuiSelect
                              options={[
                                {
                                  value: 'option_one',
                                  text: 'Version: Latest',
                                },
                              ]}
                            />
                          </EuiFlexItem>
                        </EuiFlexGroup>
                        <EuiSpacer size='s' />
                        <EuiPageHeader restrictWidth pageTitle={title} />
                        <EuiSpacer size='xl'/>
                        <EuiText>{this.props.children}</EuiText>
                      </ArticleWrapper>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <TOC>{OnThisPageNav}</TOC>
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
