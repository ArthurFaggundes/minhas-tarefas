import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'

import { RootReducer } from '../../store'

const TaskList = () => {
  const { tasks } = useSelector((state: RootReducer) => state) // Usa o hook useSelector para acessar o estado global da store Redux e obter a lista de tarefas

  return (
    <Container>
      <p>2 tasks marked as &quot;category&ldquo; and &quot;term&ldquo;</p>
      <ul>
        {tasks.map((t) => (
          <li key={t.Title}>
            <Task
              title={t.Title}
              description={t.Description}
              priority={t.Priority}
              Status={t.Status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TaskList
