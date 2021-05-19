import React from 'react'
import styled from 'styled-components'

import { EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiTitle } from '@elastic/eui'
import SelectItem from './select_item'

export default function SuggestionSelect(props: any) {
  const { isOpen } = props

  return (
    <SearchDropDownWrapper isOpen={isOpen}>
      <SearchDropDown>
        <EuiFlexGroup direction='column' gutterSize='m'>
          <EuiFlexItem grow={false}>
        <EuiTitle size='xxs'>
          <h3>Suggestion based on popular results</h3>
        </EuiTitle>
        <EuiSpacer size='m' />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
        <SelectItem />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
        <SelectItem
          icon='logoObservability'
          title='Ingest data from Splunk (Experimental)'
          excerpt='Cloudtrail, Nginx, and Zeek integrations offer the ability to seamlessly ingest data from a Splunk Enterprise instance...'
        /></EuiFlexItem>
        <EuiFlexItem grow={false}>
        <SelectItem
          icon='logoAppSearch'
          title='Getting started with App Search'
          excerpt='built on top of the Elastic Cloud Enterprise, to deliver a rich search experience within your applications. App Search features include...'
        /></EuiFlexItem>
        </EuiFlexGroup>
      </SearchDropDown>
    </SearchDropDownWrapper>
  )
}

const SearchDropDownWrapper = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: 1fr;
  align-self: center;
  margin-top: 2rem;
  left: 0;
  right: 0;
  opacity: ${(props: any) => (props.isOpen ? '1' : '0')};
  visibility: ${(props: any) => (props.isOpen ? 'visible' : 'hidden')};
  transition: all 0.2s ease-in-out;
`
const SearchDropDown = styled.div`
  width: 50rem;
  justify-self: center;
  align-self: center;
  padding: ${(props) => props.theme.sizes.sizeL};
  background: ${(props) => props.theme.searchSelect.background};
  border-bottom-left-radius: ${(props) =>
    props.theme.searchSelect.borderRadius};
  border-bottom-right-radius: ${(props) =>
    props.theme.searchSelect.borderRadius};
  box-shadow: 0 0.9px 4px -1px rgb(0 0 0 / 8%), 0 2.6px 8px -1px rgb(0 0 0 / 6%),
    0 5.7px 12px -1px rgb(0 0 0 / 5%), 0 15px 15px -1px rgb(0 0 0 / 4%);
  z-index: 2;
`
