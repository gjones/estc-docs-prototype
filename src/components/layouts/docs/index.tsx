import React, { Component } from 'react'
import Page from '../base'
import styled from 'styled-components'

type Props = {
  title: string
  description: string
  largeHeadline: string
  children: any
}

const DocContainer = styled.div`
  margin: $0;
  min-height: 80vh;

  time {
    color: ${(props) => props.theme.text.light};
  }

  p,
  ul {
    color: ${(props) => props.theme.text.default};
    line-height: 1.5;
    max-width: 85%;

    a {
      color: ${(props) => props.theme.text.link};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  li {
    margin: ${(props) => props.theme.sizes.sizeM} 0;
  }

  .left {
    display: flex;
    align-items: flex-start;
    margin: ${(props) => props.theme.sizes.sizeXL} 0;
    img {
      max-width: 85%;
    }
  }

  .centred {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${(props) => props.theme.sizes.sizeXL} 0;
    img {
      max-width: 85%;
    }
  }
`

export default class DocPage extends Component<Props> {
  render() {
    return (
      <Page>
        {this.props.children}
      </Page>
    )
  }
}
