import React from 'react'
import { getAllDocIds, getDocData } from '../../lib/docs'
import Date from '../../lib/date'
import DocPage from '../../components/layouts/docs'

import { EuiHeaderBreadcrumbs } from '@elastic/eui'

interface Props {
  docData: any
  params: any
}

export default function Doc(props: Props): React.ReactElement {
  const headerBreadcrumbs = (
    <EuiHeaderBreadcrumbs
      breadcrumbs={[
        {
          text: 'Documentation',
          href: '/',
        },
        {
          text: 'Search: Ingest data',
          href: '/docs/'
        },
        {
          text: 'Ingesting data with Node.js',
        },
      ]}
    />
  )

  return (
    <DocPage
      title={props.docData.title}
      pageBreadcrumbs={headerBreadcrumbs}>
      <br />
      <Date dateString={props.docData.date} />
      <br />

      <div dangerouslySetInnerHTML={{ __html: props.docData.contentHtml}} />
    </DocPage>
  )
}

export async function getStaticPaths() {
  const paths = getAllDocIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: any }) {
  const docData = await getDocData(params.id)
  return {
    props: {
      docData,
    },
  }
}
