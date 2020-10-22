import * as React from 'react';
import { IKeyValString } from '../../interfaces';

const images: IKeyValString = {
  favicon: require('../../assets/images/favicon.png'),
};

interface IProps {
  className?: string;
  name: string;
}

export const Image = (props: IProps) => (
  <img className={props.className ? props.className : ''} src={images[props.name]} alt={props.name} />
);
