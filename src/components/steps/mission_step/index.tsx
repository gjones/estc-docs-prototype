import Link from 'next/link'
import styled from 'styled-components'
import { EuiFlexGroup, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui'

type Props = {
  stepNumber: string
  title: string
  description: string
  url: string
}

export default function MissionStep(props: Props) {
  const { stepNumber, title, description, url } = props

  return (
    <MissionStepWrapper>
      <Link href={url}>
        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            <Circle>
              <EuiTitle size='xs'>
                <h4>{stepNumber}</h4>
              </EuiTitle>
            </Circle>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiTitle size='xs'>
              <h4>{title}</h4>
            </EuiTitle>
            <EuiText size='s' color='subdued'>
              <p>{description}</p>
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </Link>
    </MissionStepWrapper>
  )
}

MissionStep.defaultProps = {
  stepNumber: '1',
  title: 'Enter Title',
  description: 'Enter Description',
  url: '/docs/ingest-data-with-nodejs/',
}

const MissionStepWrapper = styled.div`
  padding: ${(props: any) => props.theme.sizes.sizeL};
  border-radius: ${(props: any) => props.theme.steps.borderRadius};
  &:hover {
    cursor: pointer;
    background: ${(props: any) => props.theme.steps.background};
  }
`

const Circle = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  border: 1px solid ${(props: any) => props.theme.steps.borderColour};
  height: ${(props: any) => props.theme.sizes.sizeXXL};
  width: ${(props: any) => props.theme.sizes.sizeXXL};
  border-radius: 50%;
  background: ${(props: any) => props.theme.steps.background};
`
