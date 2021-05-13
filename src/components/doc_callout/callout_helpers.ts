import { DocCallOutProps } from './doc_callout';

export type DocCallOutType = {
  id: DocCallOutProps['template'];
  title: DocCallOutProps['title'];
  message: React.ReactNode;
  color: DocCallOutProps['color'];
};

export const DocCallOutValues: DocCallOutType[] = [];

export function registerDocCallOut(docCallOut: DocCallOutType[]): void {
  DocCallOutValues.push(...docCallOut);
}
