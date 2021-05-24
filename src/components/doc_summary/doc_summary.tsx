import React, { FunctionComponent } from 'react'
import { CommonProps } from '@elastic/eui'
import styled from 'styled-components'

import { EuiTitle, EuiText } from '@elastic/eui'

export type DocSummaryProps = CommonProps & {
  title?: string
}

export const DocSummary: FunctionComponent<DocSummaryProps> = ({
  title,
  children,
}: any) => {
  return (
    <SummaryArea className='docSummary'>
      <EuiTitle size='xs'>
        <h3>{title}</h3>
      </EuiTitle>
      <EuiText>{children}</EuiText>
    </SummaryArea>
  )
}

const SummaryArea = styled.div`
  background: #f5f7fa;
  border-left: 5px solid #00bfb3;
  padding: 1rem;
`
