import React, { Component, FunctionComponent } from 'react'

interface IPropsUserCard {
  children: string
  onToggle: () => void
  isActive?: boolean
}

const UserCard = ({ children, onToggle, isActive = true }: IPropsUserCard) => (
  <div>
    {isActive && children}
    <button onClick={onToggle}>
      {isActive ? 'Hide' : 'Show'} {children}
    </button>
  </div>
);

interface IPropsWithToggle {
  name: string
}

interface IStateWithToggle {
  isActive: boolean
}

const withToggle = (Cmp: FunctionComponent<IPropsUserCard>) =>
  class extends Component<IPropsWithToggle, IStateWithToggle> {
    constructor(props: IPropsWithToggle) {
      super(props);
      this.state = { isActive: true };
      this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
      const { isActive } = this.state;
      this.setState({ isActive: !isActive })
    }

    render() {
      const { name } = this.props
      const { isActive } = this.state;

      return <Cmp onToggle={this.onToggle} isActive={isActive}>{name}</Cmp>;
    }
  }

export const SmartUserCard = withToggle(UserCard);
