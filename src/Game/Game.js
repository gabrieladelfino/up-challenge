import React from 'react'
import { Container, Wrapper } from './Game.style'
import { Scenary, Car } from '../components'

import scenary from '../assets/CENARIO_anima.gif'
import car from '../assets/CARRO.png'

const Game = () => (
  <Container>
    <Scenary img={scenary}>
      <Wrapper>
        <Car img={car} />
      </Wrapper>
    </Scenary>
  </Container>
)

export default Game
