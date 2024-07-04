import { useState } from 'react'
import { useSelector } from 'react-redux'

import { ContactComponent, FavComponent } from '../../components/Contact'
import { RootReducer } from '../../redux/store'
import { MainContainer, TitleResult } from '../../styles/global'
import Inner from './list.style'
import { plainContact } from '../../utils/tools'

const ListContacts = () => {
  const [favMode] = useState(false)
  const { list: listaContatos } = useSelector(
    (root: RootReducer) => root.contact,
  )
  const { type, query, value } = useSelector(
    (root: RootReducer) => root.filters,
  )

  const displayResultText = (qtt: number) => {
    let message = ''
    const tail = query != undefined && query?.length > 0 ? ` e "${query}"` : ''

    if (type === 'all') {
      message = `${qtt} contato(s) em geral ${tail}`
    } else if(type === 'fav') {
      message = `${qtt} contato(s) encontrados como "favorito"${tail}`
    } else {
      message = `${qtt} contato(s) encontrados como: "${type} = ${value}"${tail}`
    }

    return message
  }

  const filtering = () => {
    let filtered = listaContatos
    if (query != undefined) {
      filtered = filtered.filter(
        (item) =>
          plainContact(item.name).search(plainContact(query)) >= 0,
      )

      if(type === 'category') {
        filtered = filtered.filter(item => item.category === value)
      } else if(type === 'fav') {
        filtered = filtered.filter(item => item.fav)
      }
    }
    return filtered
  }

  const filterValue = filtering()
  const displayValue = displayResultText(filterValue.length)

  return (
    <MainContainer>
      <TitleResult as="p">{displayValue}</TitleResult>

      {favMode ? (
        <Inner.Grid>
          {filterValue.map((item) => (
            <FavComponent key={item.name}>{item}</FavComponent>
          ))}
        </Inner.Grid>
      ) : (
        <Inner.Stack>
          {filtering().map((item) => (
            <ContactComponent key={item.name}>{item}</ContactComponent>
          ))}
        </Inner.Stack>
      )}
    </MainContainer>
  )
}
export default ListContacts