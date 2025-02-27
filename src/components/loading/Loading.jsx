import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0%, 100% { box-shadow: 0.2em 0px 0 0px currentcolor; }
  12% { box-shadow: 0.2em 0.2em 0 0 currentcolor; }
  25% { box-shadow: 0 0.2em 0 0px currentcolor; }
  37% { box-shadow: -0.2em 0.2em 0 0 currentcolor; }
  50% { box-shadow: -0.2em 0 0 0 currentcolor; }
  62% { box-shadow: -0.2em -0.2em 0 0 currentcolor; }
  75% { box-shadow: 0px -0.2em 0 0 currentcolor; }
  87% { box-shadow: 0.2em -0.2em 0 0 currentcolor; }
`

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.684);
  backdrop-filter: blur(8px) grayscale(1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
  opacity: 1;
  visibility: visible;
  transition:
    opacity 0.5s ease,
    visibility 0.5s ease;
`

const Loader = styled.div`
  overflow: hidden;
  transform: rotateZ(45deg);
  perspective: 1000px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  color: #fff;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: ${spin} 1s linear infinite;
  }

  &:after {
    color: #0400ff;
    transform: rotateY(70deg);
    animation-delay: 0.4s;
  }
`

const Loading = () => {
  return (
    <LoaderOverlay>
      <Loader />
    </LoaderOverlay>
  )
}

export default Loading
