import React, { ReactNode } from 'react'

interface IPropsFrame {
  children: ReactNode
  color?: string
}

export const Frame = ({ children, color = 'red' }: IPropsFrame) => (
  <div style={{ borderColor: color }}>
    {children}
  </div>);

export const FramedImg = () => (
  <Frame><img src="https://i.ytimg.com/vi/pjRs_WT8VzM/maxresdefault.jpg" /></Frame>);

export const FramedUser = () => (
  <Frame>
    <h1>User:
      <h3>Vasa</h3>
      <h3>Vasa1</h3>
    </h1>
  </Frame>);
