import * as React from 'react';

export class BaseLayout extends React.Component {
  render() {
    return (
      <main className="">

        {this.props.children}
      </main>
    );
  }
}
