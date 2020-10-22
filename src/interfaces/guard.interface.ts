export interface IGuards {
  [key: string]: () => boolean;
}

export type IGuardsArray = Array<() => boolean>;
