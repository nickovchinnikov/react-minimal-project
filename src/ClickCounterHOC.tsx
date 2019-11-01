import React, { Component, FunctionComponent } from 'react'

interface IPropsClickCounter { }

interface IStateClickCounter {
  count: number
}

interface IPropsCountButton {
  children: number
  inc: () => void
}

const CountButton = ({ children, inc }: IPropsCountButton) => (
  <button onClick={inc}>
    Clicked {children} times!
  </button>
);

const FancyCount = ({ children, inc }: IPropsCountButton) => (
  <button onClick={inc}>
    How dare are you to click {children} times!
  </button>
);

const withCounter = (Cmp: FunctionComponent<IPropsCountButton>) =>
  class ClickCounter extends Component<IPropsClickCounter, IStateClickCounter> {
    constructor(props: IPropsClickCounter) {
      super(props);
      this.state = { count: 0 };
      this.inc = this.inc.bind(this)
    }

    inc() {
      const { count } = this.state;
      this.setState({ count: count + 1 });
    }

    render() {
      const { count } = this.state;
      return <Cmp inc={this.inc}>{count}</Cmp>;
    }
  }

export const ClickCounter = withCounter(CountButton);
export const FancyClickCounter = withCounter(FancyCount);
