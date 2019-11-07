import React, { ReactNode } from 'react'

interface IProps {
  header: ReactNode
  children: ReactNode
  onClose?: () => void
}

export const Container = ({ header, children, onClose }: IProps) => (<div>
  <div>
    <div>
      {header}
      <button onClick={onClose}>Close</button>
    </div>
  <div>
    {children}
  </div>
  </div >
</div>);