import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import FilterCards from '../../components/FilterCards'
import * as S from './styles'
import { setSearchTerm } from '../../store/reducers/filter'

const SideBar = () => {
  const dispatch = useDispatch()
  const { searchTerm } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.SearchInput
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />{' '}
        {/* Campo de entrada para busca de tarefas, atualiza o estado do filtro ao digitar */}
        <S.Filter>
          <FilterCards legend="pending" counter={1} />
          <FilterCards legend="done" counter={2} />
          <FilterCards legend="urgent" counter={1} />
          <FilterCards legend="important" counter={5} />
          <FilterCards legend="normal" counter={4} />
          <FilterCards legend="all" counter={11} />
        </S.Filter>
      </div>
    </S.Aside>
  )
}

export default SideBar
