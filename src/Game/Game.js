import React, { useEffect, useState } from 'react';

import { Container, Wrapper, Information } from './Game.style'
import { Scenary, Car } from '../components'
import keys from '../utils/keys'

import scenary from '../assets/scenary.gif'
import scenaryStoped from '../assets/stopedScenary.png'

import car from '../assets/car.png'

const Game = () => {

  const [keyPressed, setKeyPressed] = useState('center');
  const [time, setTime] = useState(0);
  const [image, setImage] = useState(scenary)

  const keyPress = e => {
    if(e.which === keys[0].code){
      setImage(image === scenary ? scenaryStoped : scenary)
      console.log(image)
    }
    else{
      keys.forEach(element => {
        if (e.which === element.code) {
          setKeyPressed(element.position)
        }
       
      })
    }
  }

  const startTimer = () => setInterval(() => setTime(Date.now()), 1000)

  useEffect(() => {
    window.addEventListener('keyup', keyPress)

    return () => {
      window.removeEventListener('keyup', keyPress)
    }
  })

  return (
    <Container onKeyUp={e => keyPress(e)}>
      <Information>
        <div>Nemezis</div>
        <div>{time}</div>
      </Information>
      <Scenary img={image}>
        <Wrapper position={keyPressed}>
          <Car img={car} />
        </Wrapper>
      </Scenary>
    </Container >
  )
}



export default Game
