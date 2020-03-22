import React, { useEffect, useState } from 'react';

import { Container, Wrapper } from './Game.style'
import { Scenary, Car } from '../components'

import scenary from '../assets/CENARIO_anima.gif'
import car from '../assets/CARRO.png'

const Game = () => {

  const [keyPressed, setKeyPressed] = useState('center');

  const keys = [
    {
      key: 'a',
      code: 65,
      position: 'flex-start'
    },
    {
      key: 's',
      code: 83,
      position: 'center'
    },
    {
      key: 'd',
      code: 68,
      position: 'flex-end'
    },
    {
      key: 'arrowLeft',
      code: 37,
      position: 'flex-start'
    },
    {
      key: 'arrowRight',
      code: 39,
      position: 'flex-end'
    }
  ]

  function keyPress(e) {
    keys.forEach(element => {
      if(e.which === element.code) {
        setKeyPressed(element.position)
      }
    })
  }

  useEffect(() => {
    window.addEventListener('keyup', keyPress)
    
    return () => {
      window.removeEventListener('keyup', keyPress);
    }
  })

  return (
    <Container onKeyUp={e => keyPress(e)}>
      <Scenary img={scenary}>
        <Wrapper position={keyPressed}>
          <Car img={car} />
        </Wrapper>
      </Scenary>
    </Container>
  )
}



export default Game
