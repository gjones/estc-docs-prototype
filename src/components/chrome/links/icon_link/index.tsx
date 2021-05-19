import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { EuiIcon, EuiFlexGroup, EuiFlexItem } from '@elastic/eui'

export default function IconLink(props: any) {
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

IconLink.defaultProps = {
  title: 'Ingesting data with Node.js on Elastic Cloud',
  link: '/docs/',
}

const LinkWrapper = styled.div`
  color: ${(props: any) => props.theme.text.link};
  margin-right: ${(props: any) => props.theme.sizes.sizeXL};
  .euiIcon {
    color: ${(props: any) => props.theme.text.default};
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
