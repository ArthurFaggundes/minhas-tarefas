import styled, { createGlobalStyle } from 'styled-components'
import { Button } from '../components/Task/styles'
import colors from './colors'

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; font-family: Roboto, sans-serif; }
  ul { list-style: none; }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh; // barra de rolagem só vai ter no main
  overflow-y: scroll;
`

export const Title = styled.h2`
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`

export const SearchInput = styled.input`
  border-radius: 8px;
  font-weight: 400;
  padding: 8px;
  background-color: #fff;
  color: #666;
  border-color: #666;
  width: 100%;
`

export const SaveButton = styled(Button)`
  background-color: ${colors.green};
`

export default GlobalStyle
