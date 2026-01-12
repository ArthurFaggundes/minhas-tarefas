import FilterCards from '../../components/FilterCards'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.SearchInput type="text" placeholder="Search tasks..." />
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

export default SideBar
