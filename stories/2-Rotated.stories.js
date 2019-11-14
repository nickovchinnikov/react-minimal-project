import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export default {
  title: 'RotatedComponent',
};

export const RotatedComponent = () => <Rotate>&lt; 💅 &gt;</Rotate>;

export const test = () => <h1>Works!</h1>

RotatedComponent.story = {
  name: 'Rotated',
};