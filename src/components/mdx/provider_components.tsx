/* eslint-disable react/display-name, @typescript-eslint/no-explicit-any */
import React, { FunctionComponent } from 'react';
import {
  EuiButton,
  EuiCode,
  EuiCodeBlock,
  EuiHorizontalRule,
  EuiImage,
  EuiLink,
  EuiTable,
  EuiTableBody,
  EuiTableHeaderCell,
  EuiTableRow,
  EuiTableRowCell,
} from '@elastic/eui';

import { DocCallOut } from '../doc_callout';

interface ProviderComponents {
  [key: string]: FunctionComponent;
}

export const providerComponents: ProviderComponents = {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  a: (props: any) => (
    <EuiLink external={!/^\.?\.?\//.test(props.href)} {...props}>
      {props.children}
    </EuiLink>
  ),
  hr: EuiHorizontalRule,
  img: (props: any) => (
    <EuiImage
      url={props.src}
      title={props.alt}
      {...props}
      allowFullScreen
      hasShadow
    />
  ),
  table: (props: any) => <EuiTable responsive={true} {...props} />,
  tbody: EuiTableBody,
  th: EuiTableHeaderCell,
  tr: EuiTableRow,
  td: EuiTableRowCell,
  pre: (props: any) => <div {...props} />,
  code: (props: any) => {
    return (
      <EuiCodeBlock
        fontSize="m"
        paddingSize="s"
        isCopyable
        whiteSpace="pre"
        {...props}
        language={
          props.className ? props.className.replace('language-', '') : 'none'
        }
      />
    );
  },
  inlineCode: EuiCode,
  DocCallOut,
  DocButton: EuiButton,
};
