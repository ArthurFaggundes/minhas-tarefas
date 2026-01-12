import * as S from './styles'

export type PropsActive = {
  active?: boolean
  counter: number
  legend: string
}

const FilterCards = ({ active, counter, legend }: PropsActive) => (
  <S.Container active={active}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{legend}</S.Label>
  </S.Container>
)

export default FilterCards
