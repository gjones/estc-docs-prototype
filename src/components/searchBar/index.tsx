import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
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
  subtitle: boolean
  spacerSize: string
}

export default function SearchBarArea(props: Props) {
  const SearchBarArea = styled.section`
    background-color: ${(props) => props.theme.header.background};
    background-image: url(https://s3.amazonaws.com/garethdjones.com/images/background-2.svg),
      url(https://s3.amazonaws.com/garethdjones.com/images/background-1.svg);
    background-position: left bottom, right top;
    background-repeat: no-repeat, no-repeat;
    box-shadow: inset 0px -2px 2px rgba(200, 200, 200, 0.2);
  `

  const MainTitle = styled.h1`
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.textLarger}};
  `

  const Subtitle = styled.p`
    text-align: center;
  `

  const MainSearch = styled.div`
    .euiFormControlLayout {
      max-width: 50rem;
      margin: 0 auto;
    }

    input {
      width: 100%;
      max-width: 50rem;
      height: 4rem;
      margin-top: 0.875rem;
      box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
    }

    svg {
      margin-top: 1rem;
    }
  `

  const { placeholder, spacerSize, subtitle } = props
  const [isClearable] = useState(true)
  const [value, setValue] = useState()
  const router = useRouter()
  let subTitle

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const sendUser = (e) => {
    router.push('/docs/?' + value)
  }

  if (subtitle) {
    subTitle = (
      <Fragment>
        <EuiSpacer size='s' />
        <EuiFlexItem>
          <EuiText>
            <Subtitle>
              Need help? Here you’ll find complete coverage of Elasticsearch,
              Kibana, and more.
            </Subtitle>
          </EuiText>
        </EuiFlexItem>
      </Fragment>
    )
  }

  return (
    <SearchBarArea>
      <EuiFlexGroup gutterSize='none' direction='column'>
        <EuiFlexItem>
          <EuiSpacer size={spacerSize} />
          <EuiSpacer size='l' />
          <EuiTitle size='l'>
            <MainTitle>Elastic Documentation</MainTitle>
          </EuiTitle>
        </EuiFlexItem>
        {subTitle}
        <EuiSpacer size={spacerSize} />
        <EuiFlexItem>
          <EuiFlexGroup gutterSize='none' justifyContent='center'>
            <EuiFlexItem>
              <MainSearch>
                <EuiFieldSearch
                  placeholder={placeholder}
                  value={value}
                  //onChange={(e) => onChange(e)}
                  isClearable={isClearable}
                  onSearch={sendUser}
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
  subtitle: true,
  spacerSize: 'xxl',
}
