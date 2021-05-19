import { getAllPostSlugs, getPostdata } from '../../lib/posts'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'

import ArticleLayout from '../../components/layouts/article_layout'
import { EuiHeaderBreadcrumbs } from '@elastic/eui'

import AllComponents from '../../components/mdx/provider_components'

const components = AllComponents

export default function Posts({ source, frontMatter }) {
  const content = hydrate(source, { components })

  const headerBreadcrumbs = (
    <EuiHeaderBreadcrumbs
      breadcrumbs={[
        {
          text: 'Documentation',
          href: '/',
        },
        {
          text: 'Search: Ingest data',
          href: '/docs/',
        },
        {
          text: 'Ingesting data with Node.js',
        },
      ]}
    />
  )

  return (
    <ArticleLayout title={frontMatter.title} pageBreadcrumbs={headerBreadcrumbs}>
      {content}
    </ArticleLayout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const postContent = await getPostdata(params.slug)
  const { data, content } = matter(postContent)
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
  })
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}
