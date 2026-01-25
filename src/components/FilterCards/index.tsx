import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { changeFilter } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'

export type PropsActive = {
  legend: string
  criteria: 'Priority' | 'Status' | 'All'
  value?: enums.Priority | enums.Status
}

const FilterCards = ({ legend, criteria, value }: PropsActive) => {
  const dispatch = useDispatch() // Hook do Redux para para atualizar estado através de ações
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const cardIsActive = () => {
    const sameCriteria = filter.criteria === criteria
    const sameValue = filter.value === value

    return sameCriteria && sameValue
  }
  const activeCard = cardIsActive()

  const countTasks = () => {
    if (criteria === 'All') {
      return tasks.itens.length
    }
    if (criteria === 'Priority') {
      return tasks.itens.filter((item) => item.Priority === value).length
    }
    if (criteria === 'Status') {
      return tasks.itens.filter((item) => item.Status === value).length
    }
  }
  const counter = countTasks()

  const filterBy = () => {
    // Dispara ação changeFilter com os critérios e valores fornecidos
    dispatch(
      changeFilter({
        criteria,
        value
      })
    )
  }

  return (
    <S.Container onClick={filterBy} active={activeCard}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{legend}</S.Label>
    </S.Container>
  )
}

export default FilterCards
