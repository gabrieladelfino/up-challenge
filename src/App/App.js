import React, { useState } from 'react'

import { Container, Wrapper, Layer, Title } from './App.style'
import { Input, Button } from '../components'

import theme from '../utils/theme'
import image from '../assets/layer.png'

const App = () => {

  const [user, setUser] = useState('');
  const [disabled, setIsDisabled] = useState(true);

  const startGame = user => {
    localStorage.setItem('user', JSON.stringify(user))
    window.location.pathname = '/game'
  }

  return (
    <Container>
      <Wrapper>
        <Layer src={image} width={'34.5%'} height={'35%'} />
        <Title>Car Game</Title>
        <Input
          placeholder='Digite seu usuário para começar'
          onKeyUp={e => {
            setUser(e.target.value)
            setIsDisabled(false)
          }}
        />
        <Button
          disabled={disabled}
          backgroundColor={theme.colors.detail}
          onClick={() => startGame(user)}
        >
          Jogar
      </Button>
      </Wrapper>
    </Container>
  )
}

export default App
