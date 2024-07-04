import { useDispatch, useSelector } from 'react-redux'

import { setQuery } from '../../redux/filters/reducer'
import { RootReducer } from '../../redux/store'

import FilterCard from '../../components/FilterCard'
import { Button, Querier } from '../../styles/global'
import { CategoryType, ChangeType } from '../../utils/types'

import * as SB from './sidebar.style'
import { useNavigate } from 'react-router-dom'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters: showFilter }: Props) => {
  const dsp = useDispatch()
  const navigate = useNavigate()

  const { query } = useSelector(({ filters }: RootReducer) => filters)

  const change = ({ target }: ChangeType) => {
    const value = target.value
    dsp(setQuery(value))
  }

  return (
    <SB.Aside>
      {showFilter ? (
        <>
          <Querier
            type="text"
            placeholder="Buscar"
            value={query}
            onChange={change}
          />
          {/* Área dos filtros */}
          <SB.FilterContainer>
            <FilterCard
              type="category"
              criterion="família"
              value={CategoryType.FAMILY}
            />
            <FilterCard
              type="category"
              criterion="trabalho"
              value={CategoryType.WORK}
            />
            <FilterCard
              type="category"
              criterion="comum"
              value={CategoryType.COMMON}
            />
            <FilterCard type="fav" criterion="favorito" />
            <FilterCard type="all" criterion="todos" />
          </SB.FilterContainer>
          {/* Botão para adicionar */}
          <SB.ButtonNavigate to="/novo">+</SB.ButtonNavigate>
        </>
      ) : (
        <Button type="button" onClick={() => navigate('/')}>
          Voltar para lista de Contatos
        </Button>
      )}
    </SB.Aside>
  )
}

export default SideBar