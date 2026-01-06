import SideBar from './containers/SideBar'
import TaskList from './containers/TaskList'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TaskList />
      </Container>
    </>
  )
}

export default App

// npm i --save styled-components
// npm i --save @types/styled-components
// npm i --save react-redux @reduxjs/toolkit
// npx eslint --fix .
// npm start
