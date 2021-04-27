import React from 'react'

import {
  EuiButton,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
} from '@elastic/eui'

export default function Header() {

    return (
      <EuiHeader theme='dark'>
            <EuiHeaderSectionItem border='right'>
              <EuiHeaderLogo iconType='logoElastic' href='/'>
                Elastic
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
    )
}
