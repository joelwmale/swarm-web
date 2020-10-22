import * as React from 'react';
import { BaseLayout } from '../public';

export class Loading extends React.Component {
  public render() {
    return (
      <BaseLayout>
        <div className="h-screen w-4/5 mx-auto text-center flex justify-center">
          <h1 className="flex justify-center text-2xl flex-col">Just a sec!</h1>
        </div>
      </BaseLayout>
    );
  }
}
