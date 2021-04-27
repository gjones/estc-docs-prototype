import React from 'react'
import { parseISO, format } from 'date-fns'

interface Props {
  dateString: any
}

export default function Date(props: Props): React.ReactElement {
  const date = parseISO(props.dateString)
  return <time dateTime={props.dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
