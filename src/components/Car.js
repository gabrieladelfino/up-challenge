import styled from 'styled-components'

export const Car = styled.div`
  background: url(${props => props.img}) no-repeat center;
  background-size: 100%;
  width: 150px;
  height: 100%;
`

export default Car

