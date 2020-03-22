import styled from 'styled-components'

export const Car = styled.div`
  background: url(${props => props.img}) no-repeat center;
  background-size: 100%;
  width: 150px;
  height: 100%;
  
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`

export default Car

