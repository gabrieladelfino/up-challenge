import styled from 'styled-components'
import theme from '../utils/theme'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-family: ${theme.font.font_family};
  font-size: ${theme.font.font_size};

  & > h2 {
    font-weight: bold;
  }
`

export const Wrapper = styled.div`
  width: 50%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: ${props => props.position};  
`
