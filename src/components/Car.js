import styled, { css } from 'styled-components'

export const Car = styled.div`
  background: url(${props => props.img}) no-repeat center;
  background-size: 100%;
  width: 150px;
  height: 100%;

  ${props => props.isAnimation && (
    css`
      animation: float 3s ease-in-out infinite;

      @keyframes float {
        0% {
          transform: translateX(0px);
        }
        50% {
          transform: translateX(-10px);
        }
        100% {
          transform: translateX(0px);
        }
      }
    `)}
`

export default Car

