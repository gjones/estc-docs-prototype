import { getSortedPosts } from '../../lib/posts'
import styled from 'styled-components'

import {
  EuiFlexGroup,
  EuiFlexGrid,
  EuiFlexItem,
  EuiHeaderBreadcrumbs,
  EuiSpacer,
  EuiText,
} from '@elastic/eui'

import SearchLayout from '../../components/layouts/search_layout'
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
    <SearchLayout title='Search results' pageBreadcrumbs={headerBreadcrumbs}>
      <Container>
        <EuiFlexGroup direction='column'>
          <EuiFlexItem>
            <EuiText size='s' color='subdued'>
              Showing 64 results for Ingesting Data
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiSpacer size='xl' />
            <EuiFlexGrid gutterSize='xl' columns={1}>
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
    </SearchLayout>
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
