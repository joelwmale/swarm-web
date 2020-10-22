import * as React from 'react';
import { Redirect } from 'react-router';

interface IProps {
  to: Function|string;
}

export const Redirecter = (props: IProps) => (
  <Redirect
    push
    to={
      typeof props.to === 'function'
        ? props.to()
        : props.to
    }
  />
);
