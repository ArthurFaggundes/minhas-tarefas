import { Provider } from 'react-redux'
import store from './store'

import SideBar from './containers/SideBar'
import TaskList from './containers/TaskList'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TaskList />
      </Container>
    </Provider>
  )
}

export default App

// npm i --save styled-components
// npm i --save @types/styled-components
// npm i --save react-redux @reduxjs/toolkit
// npx eslint --fix .
// npm start
