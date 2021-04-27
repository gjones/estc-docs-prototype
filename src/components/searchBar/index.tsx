import React from 'react'
import styled from 'styled-components'

import {
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTitle,
  EuiSpacer,
} from '@elastic/eui'

type Props = {
  placeholder: string
}

export default function SearchBarArea(props: Props) {
  const SearchBarArea = styled.section`
    background-color: ${(props) => props.theme.header.background};
  `

  const MainTitle = styled.h1`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.textLarger}};
`

  const Subtitle = styled.p`
    text-align: center;
  `
  const MainSearch = styled.div`
    input {
      width: 100%;
      margin: 0 auto;
    }
  `

  const { placeholder } = props

  return (
    <SearchBarArea>
      <EuiFlexGroup gutterSize='none' direction='column'>
        <EuiFlexItem>
          <EuiSpacer size='xxl' />
          <EuiTitle size='l'>
            <MainTitle>Elastic Documentation</MainTitle>
          </EuiTitle>
        </EuiFlexItem>
        <EuiSpacer size='s' />
        <EuiFlexItem>
          <EuiText>
            <Subtitle>
              Need help? Here you’ll find complete coverage of Elasticsearch,
              Kibana, and more.
            </Subtitle>
          </EuiText>
        </EuiFlexItem>
        <EuiSpacer size='xxl' />
        <EuiFlexItem>
          <EuiFlexGroup gutterSize='none' justifyContent='center'>
            <EuiFlexItem grow={false}>
              <MainSearch>
                <EuiFieldSearch
                  placeholder={placeholder}
                  // value={value}
                  // isClearable={isClearable}
                  // onChange={onChange}
                />
              </MainSearch>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </SearchBarArea>
  )
}

SearchBarArea.defaultProps = {
  placeholder: 'Search this',
}
