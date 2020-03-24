import React, { useEffect, useState } from 'react';

import { Container, Wrapper, Information, Text } from './Game.style'
import { Scenary, Car } from '../components'

import keys from '../utils/keys'

import scenary from '../assets/scenary.gif'
import scenaryStopped from '../assets/scenaryStopped.jpg'
import car from '../assets/car.png'

const Game = () => {

  const [keyPressed, setKeyPressed] = useState('center');
  const [time, setTime] = useState(0);
  const [image, setImage] = useState(scenary)
  const [isAnimation, setIsAnimation] = useState(true)

  const name = JSON.parse(localStorage.getItem('user'))

  const countingGameTime = () => setTimeout(() => setTime(time + 1), 1000)

  const stopGame = () => {
    setImage(scenaryStopped)
    setIsAnimation(false)
    clearTimeout()
  }

  const keyPress = e => {
    if (e.which === keys[0].code) {
      setImage(image === scenary ? scenaryStopped : scenary)
      setIsAnimation(!isAnimation)
    }
    else {
      keys.forEach(element => {
        if (e.which === element.code) {
          setKeyPressed(element.position)
        }
      })
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', keyPress)

    return () => {
      window.removeEventListener('keyup', keyPress)
    }
  })

  useEffect(() => { time < 60 ? countingGameTime() : stopGame() })

  return (
    <Container onKeyUp={e => keyPress(e)}>
      <Information>
        <Text>{name}</Text>
        <Text>{time}</Text>
      </Information>
      <Scenary img={image}>
        <Wrapper position={keyPressed}>
          <Car img={car} isAnimation={isAnimation} />
        </Wrapper>
      </Scenary>
    </Container >
  )
}



export default Game
