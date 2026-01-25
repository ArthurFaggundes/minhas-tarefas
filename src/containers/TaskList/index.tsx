import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'

import { RootReducer } from '../../store'

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks) // Usa o hook useSelector para acessar o estado global da store Redux e obter a lista de tarefas
  const { searchTerm, criteria, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let filteredTasks = itens

    if (searchTerm !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.Title.toLowerCase().search(searchTerm.toLowerCase()) >= 0 // Filtra as tarefas cujo título contém o termo de busca (case insensitive)
      )
      if (criteria === 'Priority') {
        filteredTasks = filteredTasks.filter(
          // Filtra as tarefas pelo valor de prioridade selecionado
          (taskBy) => taskBy.Priority === value
        )
      } else if (criteria === 'Status') {
        filteredTasks = filteredTasks.filter(
          // Filtra as tarefas pelo valor de status selecionado
          (taskBy) => taskBy.Status === value
        )
      }
      return filteredTasks
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>
        2 tasks marked as &quot;category&ldquo; and &quot;{searchTerm}&ldquo;
      </p>
      <ul>
        <li></li>
      </ul>
      <ul>
        {filterTasks().map((t) => (
          <li key={t.Title}>
            <Task
              id={t.Id}
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
