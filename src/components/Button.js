import styled, { css } from 'styled-components'
import theme from '../utils/theme'

export const Button = styled.button`
  width: 330px;
  position: relative;
  padding: 10px;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  background: ${props => props.backgroundColor};
  color: ${theme.colors.base};
  font-weight: bold;
  font-size: ${theme.font.font_size};
  font-family: ${theme.font.font_family};
  margin: 10px 0;

  ${props => props.disabled && (
      css`
      cursor: not-allowed;
      background: transparent;
      color: ${theme.colors.base_secondary};
      border: solid 1px ${theme.colors.base_secondary};
    `
  )}

  ${props => !props.disabled && css`
    &:hover{
      opacity: 0.5;
    }  
  `}
`

export default Button
