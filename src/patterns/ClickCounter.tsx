import React, { Component } from 'react'

interface IProps { }

interface IState {
  count: number
}

export class ClickCounter extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this)
  }

  increment() {
    const { count } = this.state;
    this.setState({ count: count + 1 })
  }

  render() {
    // используем state в render()
    const { count } = this.state;
    // изменяем состояние через setState
    return (<button onClick={this.increment}>
      Clicked {count} times!
    </button>);
  }
}