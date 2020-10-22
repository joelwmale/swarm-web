import * as React from 'react';
import { Router as ReactRouter, Route, Switch } from 'react-router-dom';
import { RenderRoute } from './components';
import { CONFIG } from './config';
import { IRoute } from './interfaces';
import { guestRoutes, sharedRoutes } from './routes';
import { NotFound } from './views';

export class Router extends React.Component {
  private routes: IRoute[] = [...guestRoutes, ...sharedRoutes];

  render() {
    return (
      <ReactRouter history={CONFIG.history}>
        <Switch>
          {this.routes.map(route => (
            <RenderRoute key={route.path} {...route} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </ReactRouter>
    );
  }
}
