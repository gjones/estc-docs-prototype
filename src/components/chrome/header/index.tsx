import React, { Fragment } from 'react'

import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
} from '@elastic/eui'
type Props = {
  breadcrumbs: any
}

export default function Header(props: Props) {
  const { breadcrumbs } = props

  return (
    <Fragment>
      <EuiHeader theme='dark' position='fixed'>
        <EuiHeaderSectionItem border='right'>
          <EuiHeaderLogo iconType='logoElastic' href='/'>
            Elastic Docs
          </EuiHeaderLogo>
        </EuiHeaderSectionItem>

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
