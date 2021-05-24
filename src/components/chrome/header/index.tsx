import React, { Fragment } from 'react'

import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiHeaderSection,
} from '@elastic/eui'
import ElasticMark from './elastic_mark'
type Props = {
  breadcrumbs: any
}

export default function Header(props: Props) {
  const { breadcrumbs } = props

  return (
    <Fragment>
      <EuiHeader theme='dark' position='fixed'>
        <EuiHeaderSection side='left'>
          <EuiHeaderSectionItem border='right'>
            <EuiHeaderLogo iconType='logoElastic' href='/'>
              <ElasticMark />
            </EuiHeaderLogo>
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem>
            <EuiHeaderLinks>
              <EuiHeaderLink>Products</EuiHeaderLink>
              <EuiHeaderLink>Customers</EuiHeaderLink>
              <EuiHeaderLink>Learn</EuiHeaderLink>
              <EuiHeaderLink>Company</EuiHeaderLink>
              <EuiHeaderLink>Pricing</EuiHeaderLink>
            </EuiHeaderLinks>
          </EuiHeaderSectionItem>
        </EuiHeaderSection>

        <EuiHeaderLinks>
          <EuiButton fill color='ghost' size='s'>
            Log in
          </EuiButton>
          <EuiButton size='s' fill>
            Try Free
          </EuiButton>
        </EuiHeaderLinks>
      </EuiHeader>
      <EuiHeader position='fixed'>
        <EuiFlexGroup alignItems='center'>
          <EuiFlexItem>{breadcrumbs}</EuiFlexItem>
        </EuiFlexGroup>
      </EuiHeader>
    </Fragment>
  )
}
