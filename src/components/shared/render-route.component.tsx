import * as React from 'react';
import { Route } from 'react-router-dom';
import { IRoute } from '../../interfaces';
import { Redirecter } from '../../views/shared';

export const RenderRoute = (route: IRoute) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={ // If a route has one or more guards, evaluate that their conditions are all met.
      routerProps => (route.guards !== undefined && route.guards.map(guard => guard()).includes(false))
        ? <Redirecter to={`/${route.path.split('/')[1]}`} />
        : (
          <route.component
            {...routerProps}
            {...(route.props !== undefined
              ? route.props
              : {}
            )}
          />
        )
    }
  />
);
