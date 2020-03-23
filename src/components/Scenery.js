import styled from 'styled-components'

export const Scenary = styled.div`
  background: url(${props => props.img}) no-repeat center;
  background-size: 100%;
  height: 80vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export default Scenary

