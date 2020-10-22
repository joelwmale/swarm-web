import * as React from 'react';

export interface IRoute {
  component: typeof React.Component|((props: any) => JSX.Element);
  exact?: boolean;
  guards?: Array<() => boolean>;
  name?: string;
  path: string;
  props?: object;
}
