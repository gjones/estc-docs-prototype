import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { EuiIcon, EuiFlexGroup, EuiFlexItem } from '@elastic/eui'

type Props = {
  title: string
  link: string
}

const LinkWrapper = styled.div`
  color: ${(props) => props.theme.text.link};
  margin-right: ${(props) => props.theme.sizes.sizeXL};
  .euiIcon {
    color: ${(props) => props.theme.text.default};
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export default function DxLink(props: Props) {
  const { title, link } = props

  return (
    <LinkWrapper>
      <Link href={link}>
        <EuiFlexGroup alignItems='center' gutterSize='m' responsive={false}>
          <EuiFlexItem grow={false}>
            <EuiIcon type='link' />
          </EuiFlexItem>
          <EuiFlexItem>{title}</EuiFlexItem>
        </EuiFlexGroup>
      </Link>
    </LinkWrapper>
  )
}

DxLink.defaultProps = {
  title: 'Ingesting data with Node.js on Elastic Cloud',
  link: '/docs/',
}
