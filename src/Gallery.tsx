import React, { Component } from 'react'

import { Image } from './Image';

interface IProps {
  children: string[]
}

interface IState {
  idx: number
}

export class Gallery extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      idx: 0
    };
    this.next = this.next.bind(this)
  }
  
  next() {
    const { idx } = this.state;
    const { children } = this.props

    const nextIdx = (idx < children.length - 1) ? (idx + 1) : 0;

    this.setState({
      idx: nextIdx
    })
  }

  render() {
    const { idx } = this.state;
    const { children } = this.props;
    
    return (
      <Image onClick={this.next} src={children[idx]} />
    );
  }
}
