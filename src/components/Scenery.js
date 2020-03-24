import styled from 'styled-components'

export const Scenary = styled.div`
  background: url(${props => props.img}) no-repeat center;
  background-size: 100%;
  height: 80vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  -webkit-box-shadow: 7px -2px 17px -15px rgba (0,0,0,0,75);
  -moz-box-shadow: 7px -2px 17px -15px rgba (0,0,0,0,75);
  box-shadow: 7px -2px 17px -15px rgba (0,0,0,0,75);
`

export default Scenary

