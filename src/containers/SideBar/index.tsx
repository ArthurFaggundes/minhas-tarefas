import FilterCards from '../../components/FilterCards'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.SearchInput type="text" placeholder="Search tasks..." />
      <S.Filter>
        <FilterCards active />
        <FilterCards />
        <FilterCards />
        <FilterCards />
        <FilterCards />
        <FilterCards />
      </S.Filter>
    </div>
  </S.Aside>
)

export default SideBar
