import React from 'react'
import { getAllDocIds, getDocData } from '../../lib/docs'
import Date from '../../lib/date'
import DocPage from '../../components/layouts/docs'


interface Props {
  docData: any
  params: any
}

export default function Doc(props: Props): React.ReactElement {
  return (
    <DocPage
      title={props.docData.title}
      description={props.docData.description}
      largeHeadline={props.docData.title}>
      <br />
      <Date dateString={props.docData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: props.docData.contentHtml }} />
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
