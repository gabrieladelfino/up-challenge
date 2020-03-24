import styled from 'styled-components'
import theme from '../utils/theme'

export const Input = styled.input`
  position: relative;
  padding: 7px;
  width: 320px;
  height: 30px;
  background: ${theme.colors.base_secondary};
  border: none;
  font-size: 14px;
  font-family: sans-serif;
  color: #080808;
  border-radius: 3px;
  margin: 10px 0;
  outline: none;
  font-size: ${theme.font.font_size};
  font-family: ${theme.font.font_family};
`

export default Input
