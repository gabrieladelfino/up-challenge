import React from 'react'
import { Container } from './App.style'
import { Input, Button, Image } from '../components'
import theme from '../utils/theme'
import carImage from '../assets/CARRO.png'

const App = () => (
    <Container>
      <Image src={carImage} width={`150px`} height={`150px`} />
      <Input />
      <Button 
        backgroundColor={theme.colors.detail}
        onClick={() => window.location.pathname = '/game'}
      >
        Jogar
      </Button>
    </Container>
)

export default App
