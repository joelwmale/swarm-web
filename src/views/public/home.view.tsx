import * as React from 'react';
import { BaseLayout } from '../../components';
import { Helmet } from 'react-helmet';
import { CONFIG } from '../../config';

export class Home extends React.Component {
  render() {
    return (
      <BaseLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home - {CONFIG.appName}</title>
          <link rel="canonical" href={`${CONFIG.appBase}`} />
        </Helmet>

        <h1 className="text-2xl text-center">Swarm</h1>
      </BaseLayout>
    );
  }
}
