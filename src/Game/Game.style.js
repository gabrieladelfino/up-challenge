import styled from 'styled-components'

export const Container = styled.div`
  padding: 60px;
`

export const Wrapper = styled.div`
  width: 50%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: ${props => props.position};  
`
