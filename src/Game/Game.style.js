import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px;
  width: 90%;
  margin: 0 auto;
`

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`

export const Wrapper = styled.div`
  width: 50%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: ${props => props.position};  
`
