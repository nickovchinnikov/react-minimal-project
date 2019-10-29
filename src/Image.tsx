import React from 'react'

interface IProps {
  onClick: () => void
  src: string
  height?: number
}

export const Image = ({ onClick, src, height = 500 }: IProps) =>
  <img onClick={onClick} height={height} src={src} />
