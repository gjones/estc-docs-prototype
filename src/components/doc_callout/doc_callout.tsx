import React, { FunctionComponent } from 'react'
import { EuiCallOut, CommonProps, EuiCallOutProps } from '@elastic/eui'
import { DocCallOutValues } from './callout_helpers'

export type DocCallOutProps = CommonProps & {
  color?: EuiCallOutProps['color']
  title?: EuiCallOutProps['title']
  template?: 'development' | 'experimental' | 'beta'
}

export const DocCallOut: FunctionComponent<DocCallOutProps> = ({
  color,
  title,
  template,
  children,
}: any) => {
  if (template !== undefined) {
    const calloutData = DocCallOutValues.find(({ id }) => id === template)
    return (
      <EuiCallOut
        title={calloutData?.title}
        color={calloutData?.color}
        className='docCallOut'>
        {calloutData?.message}
      </EuiCallOut>
    )
  } else {
    return (
      <EuiCallOut title={title} color={color} className='docCallOut'>
        {children}
      </EuiCallOut>
    )
  }
}
