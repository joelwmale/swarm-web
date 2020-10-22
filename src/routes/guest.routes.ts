
import { IRoute } from '../interfaces';
import * as Views from '../views/public';

export const guestRoutes: IRoute[] = [
  {
    path: '/',
    component: Views.Home,
    exact: true,
  }
];
