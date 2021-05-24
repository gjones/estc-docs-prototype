import React from 'react'
import styled from 'styled-components'

import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui'

export default function AdCard(props: any) {
  const { title, description, buttonText, imgSrc, imgY, imgX } = props

  const Card = styled.div`
    max-width: 17rem;
    .euiPanel {
      background: url(${imgSrc}) no-repeat ${imgX} ${imgY};
    }
  `

  return (
    <Card>
      <EuiPanel hasShadow={false} hasBorder={true}>
        <EuiFlexGroup direction='column' gutterSize='s'>
          <EuiFlexItem>
            <EuiTitle size='s'>
              <h4>{title}</h4>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText size='s' color='subdued'>
              <p>{description}</p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiSpacer size='s' />
            <EuiButton>{buttonText}</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    </Card>
  )
}

AdCard.defaultProps = {
  title: 'Elastic Cloud',
  description:
    'Run Elastic solutions on Amazon Web Services, Microsoft Azure, or Google Cloud.',
  imgSrc:
    'https://gareth-misc.s3.amazonaws.com/abstract/cloudblue-grey-cloud.svg',
  imgX: '100%',
  imgY: '0.5rem',
  buttonText: 'Start a free trial',
  link: 'http://elastic.co/cloud/',
}
