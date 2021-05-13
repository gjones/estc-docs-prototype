import Page from '../../components/layouts/base'
import Link from 'next/link'
import Date from '../../lib/date'
import { getSortedDocsData } from '../../lib/docs'
import styled from 'styled-components'

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeaderBreadcrumbs,
  EuiIcon,
  EuiHorizontalRule,
  EuiPanel,
  EuiSelect,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui'
import DxPopularCard from '../../components/cards/popularContentCard'

type Props = {
  allDocsData: any
}

const Container = styled.section`
  max-width: 1280px;
  padding: ${(props) => props.theme.sizes.sizeL};
  margin: 0 auto;
  min-height: 80vh;
`

const PostList = styled.div`
  list-style: none;
`

const SearchResult = styled.li`
.euiPanel {
  box-shadow: none;
  border-radius: ${(props) => props.theme.borderRadius.radiusL};
  padding: ${(props) => props.theme.sizes.sizeL} ${(props) => props.theme.sizes.sizeXXL}
  &:hover {
    background: ${(props) => props.theme.card.background};
  }
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
    <Page
      title='Search results'
      searchSpacerSize='m'
      subtitle={false}
      pageBreadcrumbs={headerBreadcrumbs}>
      <Container>
        <EuiSpacer size='xxl' />
        <EuiFlexGroup direction='column'>
          <EuiFlexItem>
            <EuiFlexGroup direction='row' justifyContent='center'>
              <EuiFlexItem grow={false}>
                <EuiSelect
                  options={[
                    {
                      value: 'option_one',
                      text: 'Sort by: Relevance',
                    },
                  ]}
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiSelect
                  options={[
                    {
                      value: 'option_one',
                      text: 'Product: Any',
                    },
                  ]}
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiSelect
                  options={[
                    {
                      value: 'option_one',
                      text: 'Type: Any',
                    },
                  ]}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiSpacer />
            <EuiTitle>
              <h3>Your search for 'Ingest data' returned 32 results</h3>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiPanel></EuiPanel>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFlexGroup direction='column'>
                  <EuiFlexItem>
                    <DxPopularCard />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <DxPopularCard />
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiHorizontalRule />
            <EuiSpacer size='m' />
            <PostList>
              {props.allDocsData.map(
                ({ id, date, title, abstract, icon }: any) => (
                  <SearchResult key={id}>
                    <Link href={`/docs/${id}`}>
                      <EuiPanel>
                        <EuiFlexGroup direction='column' gutterSize='m'>
                          <EuiFlexItem>
                            <EuiFlexGroup gutterSize='m' alignItems='center'>
                              <EuiFlexItem grow={false}>
                                <EuiIcon type={icon} size='l' />
                              </EuiFlexItem>
                              <EuiFlexItem>
                                <EuiTitle size='xs'>
                                  <h5>{title}</h5>
                                </EuiTitle>
                              </EuiFlexItem>
                            </EuiFlexGroup>
                          </EuiFlexItem>
                          <EuiFlexItem>
                            <EuiText>
                              <p>{abstract}</p>
                            </EuiText>
                            <EuiSpacer size='s' />
                            <EuiText size='s' color='subdued'>
                              <p>
                                Last updated <Date dateString={date} />
                              </p>
                            </EuiText>
                          </EuiFlexItem>
                        </EuiFlexGroup>
                      </EuiPanel>
                    </Link>
                  </SearchResult>
                ),
              )}
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
