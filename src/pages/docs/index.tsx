import BaseLayout from '../../components/layouts/base'
import { getSortedPosts } from '../../lib/posts'
import styled from 'styled-components'

import {
  EuiBadge,
  EuiFlexGroup,
  EuiFlexGrid,
  EuiFlexItem,
  EuiHeaderBreadcrumbs,
  EuiHorizontalRule,
  EuiPanel,
  EuiSelect,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui'
import DocCard from '../../components/cards/doc_card'


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

const DocsIndex = ({ allPostsData }) => {
  return (
    <BaseLayout
      title='Search results'
      searchSpacerSize='xxl'
      subtitle={true}
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
            <EuiHorizontalRule />
            <EuiSpacer size='m' />
            <EuiFlexGroup justifyContent='flexEnd'>
              <EuiFlexItem grow={false}>
                <EuiFlexGroup alignItems='center'>
                  <EuiFlexItem grow={false}>
                    <EuiText size='s' color='subdued'>
                      <p>64 results</p>
                    </EuiText>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiBadge
                      color='hollow'
                      iconType='arrowLeft'
                      iconSide='right'
                      href='#'
                    />
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiBadge
                      color='hollow'
                      iconType='arrowRight'
                      iconSide='right'
                      href='#'
                    />
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiText size='s' color='subdued'>
                      <p>Page 1-6</p>
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size='xxl' />
            <EuiSpacer size='s' />
            <EuiFlexGrid gutterSize='xl' columns={2}>
              {allPostsData.map(
                ({ slug, date, title, excerpt, icon, tags, index }) => (
                  <EuiFlexItem key={index}>
                    <DocCard
                      slug={slug}
                      icon={icon}
                      title={title}
                      excerpt={excerpt}
                      date={date}
                      tags={tags}
                    />
                  </EuiFlexItem>
                ),
              )}
            </EuiFlexGrid>
          </EuiFlexItem>
        </EuiFlexGroup>
      </Container>
    </BaseLayout>
  )
}

export default DocsIndex

export async function getStaticProps() {
  const allPostsData = getSortedPosts()
  return {
    props: {
      allPostsData,
    },
  }
}

const Container = styled.section`
  max-width: 1280px;
  padding: ${(props: any) => props.theme.sizes.sizeL};
  margin: 0 auto;
  min-height: 80vh;
`
