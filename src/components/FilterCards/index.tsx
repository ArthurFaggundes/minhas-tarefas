import * as S from './styles'

export type PropsActive = {
  active?: boolean
}

const FilterCards = (props: PropsActive) => (
  <S.Container active={props.active}>
    <S.Counter>10</S.Counter>
    <S.Label>Tasks Completed</S.Label>
  </S.Container>
)

export default FilterCards
