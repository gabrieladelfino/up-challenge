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
  const [isAnimation, setIsAnimation] = useState(true)

  const keyPress = e => {
    if(e.which === keys[0].code){
      setImage(image === scenary ? scenaryStoped : scenary)
      setIsAnimation(!isAnimation)
    }
    else{
      keys.forEach(element => {
        if (e.which === element.code) {
          setKeyPressed(element.position)
        }
      })
    }
  }

  var s = 1;
  (function(){ setInterval(() => setTime(s++), 100) })()
  
  
  
  useEffect(() => {
    window.addEventListener('keyup', keyPress)
    
    return () => {
      window.removeEventListener('keyup', keyPress)
    }
  })

  return (
    <Container onKeyUp={e => keyPress(e)}>
      <Information>
        <h2>Nemezis</h2>
        <h2>{time}</h2>
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
