import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import music from '../../assets/sounds/fake_verthandi.mp3'

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  right: 12rem;
  top: 2.3rem;
  width: 5rem;
  max-width: 5rem;
  z-index: 3;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }

  &:before {
    content: '<audio>';
    font-family: 'La Belle Aurore', cursive;
    color: #00ff7f;
    font-size: 18px;
    position: absolute;
    margin-top: -2rem;
    left: -0.75;
    opacity: 0.9;
    line-height: 20 px;
  }

  &:after {
    content: '<audio/>';
    font-family: 'La Belle Aurore', cursive;
    color: #00ff7f;
    font-size: 18px;
    line-height: 20px;
    position: absolute;
    left: -0.75rem;
    margin-top: 1rem;
    opacity: 0.9;
  }
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`
  
const Line = styled.span`
  background: #00ff7f;
  border: 1px solid;
  


  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? 'running' : 'paused')};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`
const SoundBar = () => {
  const ref = useRef(null)
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)

    if (!click) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }
  return (
    <Box  onClick={() => handleClick()}>
      
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <audio src={music} ref={ref} loop /> &nbsp;
    </Box>
  )
}

export default SoundBar
