import styled from 'styled-components'
import theme from '../utils/theme'
import Image from '../components/Image'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 70%;
  margin: 0 auto;
  padding: 30px;
  background-color: ${theme.colors.base};
  -webkit-box-shadow: 6px 7px 14px -8px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 7px 14px -8px rgba(0,0,0,0.75);
box-shadow: 6px 7px 14px -8px rgba(0,0,0,0.75);


  & > input{
    margin-top: 40px;
  }
`

export const Layer = styled(Image)`
  position: absolute;
  top: 5%;
`

export const Title = styled.h1`
  font-family: ${theme.font.font_family};
  align-text: left;
  padding-left: 40px;
  width: 100%;
  color: ${theme.colors.detail};
`