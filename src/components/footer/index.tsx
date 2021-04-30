import React from 'react'
import styled from 'styled-components'

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiText,
  EuiSpacer,
} from '@elastic/eui'

const DocFooter = styled.footer`
  background: ${(props) => props.theme.footer.background}};
`

const Container = styled.section`
  max-width: 1280px;
  padding: ${(props) => props.theme.sizes.sizeXXL} ${(props) =>
  props.theme.sizes.sizeL}};
  margin: 0 auto;
`

const ImageContainer = styled.section`
  width: 5rem;
  padding: 0 ${(props) => props.theme.sizes.sizeL}};
  margin-left: 4rem;

  .euiImage {
    img.euiImage__img {
      width: 4rem;
    }
  }

  }
`

export default function Footer() {
  return (
    <DocFooter>
      <Container>
        <EuiFlexGroup justifyContent='spaceBetween'>
          <EuiFlexItem>
            <EuiText size='s' color='ghost'>
              Elasticsearch is a trademark of Elasticsearch B.V., registered in
              the U.S. and in other countries.
            </EuiText>
            <EuiSpacer size='s' />
            <EuiText size='s' color='ghost'>
              Apache, Apache Lucene, Apache Hadoop, Hadoop, HDFS and the yellow
              elephant logo are trademarks of the Apache Software Foundation in
              the United States and/or other countries.
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false} />
          <EuiFlexItem grow={false}>
            <ImageContainer>
              <EuiImage
                alt='Elastic logo'
                src='https://gareth-misc.s3.amazonaws.com/logo-elastic-vertical-reverse.svg'
                size='s'></EuiImage>
            </ImageContainer>
          </EuiFlexItem>
        </EuiFlexGroup>
      </Container>
    </DocFooter>
  )
}
