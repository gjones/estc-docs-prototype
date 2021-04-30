import Page from '../../components/layouts/base'
import Link from 'next/link'
import Date from '../../lib/date'
import { getSortedDocsData } from '../../lib/docs'
import styled from 'styled-components'

import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiSpacer,
  EuiTitle,
  EuiHeaderBreadcrumbs,
} from '@elastic/eui'

type Props = {
  allDocsData: any
}

const Container = styled.section`
  max-width: 1280px;
  padding: ${(props) => props.theme.sizes.sizeL}};
  margin: 0 auto;
  min-height: 80vh;
`

const PostList = styled.div`
  list-style: none;
`

const BlogPost = styled.div`
  max-width: 85%;
`

const BlogDate = styled.h4`
  font-weight: ${(props) => props.theme.fontWeights.fontRegular};
  font-size: ${(props) => props.theme.fontSizes.textRegular};
  color: ${(props) => props.theme.text.accent};
  margin: ${(props) => props.theme.sizes.sizeXL} 0
    ${(props) => props.theme.sizes.sizeXS};
`

const BlogHeadline = styled.h2`
  font-weight: ${(props) => props.theme.fontWeights.fontBold};
  font-size: ${(props) => props.theme.fontSizes.textLargish};
  color: ${(props) => props.theme.text.default};
  margin-top: 0;
  margin-bottom: ${(props) => props.theme.sizes.sizeM};

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    font-size: ${(props) => props.theme.fontSizes.textLarger};
    line-height: 1.1;
  }
`

const BlogAbstract = styled.p`
  color: ${(props) => props.theme.text.light};
  line-height: 1.4;
`
const headerBreadcrumbs = (
  <EuiHeaderBreadcrumbs
    breadcrumbs={[
      {
        text: 'Documentation',
        href: '/',
      },
      {
        text: 'Search results',
      },
    ]}
  />
)

export default function Docs(props: Props) {
  return (
    <Page title='Search results' searchSpacerSize='m' subtitle={false} pageBreadcrumbs={headerBreadcrumbs}>
      <Container>
        <EuiFlexGroup direction='column'>
          <EuiFlexItem>
            <EuiSpacer />
            <EuiTitle>
              <h3>Search results for 'Ingest data'</h3>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem>
            <PostList>
              {props.allDocsData.map(({ id, date, title, abstract }: any) => (
                <li key={id}>
                  <Link href={`/docs/${id}`}>
                    <BlogPost>
                      <BlogDate>
                        <Date dateString={date} />
                      </BlogDate>
                      <BlogHeadline>{title}</BlogHeadline>
                      <BlogAbstract>{abstract}</BlogAbstract>
                      <EuiButton>Read post</EuiButton>

                      <EuiHorizontalRule />
                    </BlogPost>
                  </Link>
                </li>
              ))}
            </PostList>
          </EuiFlexItem>
        </EuiFlexGroup>
      </Container>
    </Page>
  )
}

export async function getStaticProps() {
  const allDocsData = getSortedDocsData()
  return {
    props: {
      allDocsData,
    },
  }
}
