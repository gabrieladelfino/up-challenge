import styled  from 'styled-components'
import theme from '../utils/theme'

export const Button = styled.button`
  width: 330px;
  padding: 10px;
  margin: 10px 0;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  font-weight: bold;
  border: none;
  font-size: ${theme.font.font_size};
  font-family: ${theme.font.font_family};
  background: ${props => props.backgroundColor};
  color: ${theme.colors.base};
  border-bottom: solid 2px ${theme.colors.detail_constrast};
`

export default Button
