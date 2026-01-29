import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { setSearchTerm } from '../../store/reducers/filter'
import { ReturnButton, SearchInput } from '../../styles'

import FilterCards from '../../components/FilterCards'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { searchTerm } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <SearchInput
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />{' '}
            {/* Campo de entrada para busca de tarefas, atualiza o estado do filtro ao digitar */}
            <S.Filter>
              <FilterCards
                value={enums.Status.PENDING}
                criteria="Status"
                legend="pending"
              />
              <FilterCards
                value={enums.Status.DONE}
                criteria="Status"
                legend="done"
              />
              <FilterCards
                value={enums.Priority.URGENT}
                criteria="Priority"
                legend="urgent"
              />
              <FilterCards
                value={enums.Priority.IMPORTANT}
                criteria="Priority"
                legend="important"
              />
              <FilterCards
                value={enums.Priority.NORMAL}
                criteria="Priority"
                legend="normal"
              />
              <FilterCards criteria="All" legend="all" />
            </S.Filter>
          </>
        ) : (
          <ReturnButton onClick={() => navigate('/')}>
            Return to the task list
          </ReturnButton>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
