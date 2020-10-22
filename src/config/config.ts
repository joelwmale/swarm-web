import { createBrowserHistory, History } from 'history';
import { IKeyValString, IKeyValNumber } from '../interfaces';

interface IConfig {
  appName: string;
  appBase: string;
  environment: Environments;
  environmentIsProduction: boolean;
  history: History;
  loginPaths: IKeyValString;
  logoutPaths: IKeyValString;
  mobileWidth: number;
  scopedPath: () => string;
  sessionKey: () => string;
  sessionKeyPrefix: string;
  timeout: IKeyValNumber;
}

export enum Environments {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
};

// Environment
const environment: Environments = (process.env.NODE_ENV as Environments);
const environmentIsProduction: boolean = environment === Environments.PRODUCTION;
const environmentIsLocal: boolean = environment === Environments.DEVELOPMENT;
const pathIndex = environmentIsLocal ? 1 : 2;

// Session functions and variables
const scopedPath: (() => string) = () => location.pathname.split('/')[pathIndex];
const sessionKey: (() => string) = () => `${sessionKeyPrefix}${scopedPath()}`;
const sessionKeyPrefix: string = 'app_session_';

// Timeout constants, in minutes
const ADMIN_TIMEOUT: number = 30;

const APP_BASE = process.env.APP_BASE;

export const CONFIG: IConfig = {
  appName: process.env.APP_NAME || 'App',
  appBase: APP_BASE || '',
  environment,
  environmentIsProduction,
  history: createBrowserHistory(),
  loginPaths: {
    // 'admin': APP_BASE + '/admin/dashboard',
  },
  logoutPaths: {
    // 'admin': APP_BASE + '/admin/sign-in',
  },
  mobileWidth: 830,
  scopedPath,
  sessionKey,
  sessionKeyPrefix,
  timeout: {
    'admin': ADMIN_TIMEOUT,
  },
};
