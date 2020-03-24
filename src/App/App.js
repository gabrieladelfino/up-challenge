import React, { useState } from 'react'

import { Container } from './App.style'
import { Input, Button, Image } from '../components'
import theme from '../utils/theme'
import carImage from '../assets/car.png'

const App = () => {

  const [user, setUser] = useState('');

  const startGame = user => {
    localStorage.setItem('user', JSON.stringify(user))
    window.location.pathname = '/game'
  }

  return (
    <Container>
      <Image src={carImage} width={`150px`} height={`150px`} />
      <Input
        placeholder='Digite seu usuário para começar'
        onKeyUp={e => setUser(e.target.value)}
      />
      <Button
        backgroundColor={theme.colors.detail}
        onClick={() => startGame(user)}
      >
        Jogar
      </Button>
    </Container>
  )
}

export default App
