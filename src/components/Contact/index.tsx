import { useState } from 'react'
import { useDispatch } from 'react-redux'

import ContactModel from '../../models/Contact'
import { remove, setFavorite } from '../../redux/contacts'
import { formatNumber } from '../../utils/tools'
import { ChangeType } from '../../utils/types'
import PhoneInput from '../Phone'
// styles
import { Button, ButtonSave, Entry } from '../../styles/global'
import * as Ctt from './contact.style'
import StarIcon from '../StarIcon'

type ContactProp = {
  children: ContactModel
}

type ButtonEvtType = React.Dispatch<React.SetStateAction<boolean>>

const ButtonArea = (
  edit: boolean,
  set: ButtonEvtType,
  confirm: () => void,
  reset: () => void,
  remove: () => void,
) => {
  return edit ? (
    <>
      <ButtonSave type="button" onClick={confirm}>
        Salvar
      </ButtonSave>
      <Ctt.ButtonCancel onClick={reset}>Cancelar</Ctt.ButtonCancel>
    </>
  ) : (
    <>
      <Button type="button" onClick={() => set(!edit)}>
        Editar
      </Button>
      <Ctt.ButtonCancel onClick={remove}>Remover</Ctt.ButtonCancel>
    </>
  )
}

export const FavComponent = ({ children: aluno }: ContactProp) => {
  const dsp = useDispatch()
  const [isEditing, setEdition] = useState(false)

  const [prevName, setPrevName] = useState(aluno.name)
  const [prevEmail, setPrevEmail] = useState(aluno.email)
  const [prevTel, setPrevTel] = useState(aluno.phone)

  const [name, setName] = useState(aluno.name)
  const [email, setEmail] = useState(aluno.email)
  const [tel, setTel] = useState(aluno.phone)

  const editEmail = ({ target }: ChangeType) => setPrevEmail(target.value)
  const editName = ({ target }: ChangeType) => setPrevName(target.value)
  const editTel = (number : string) => setPrevTel(number)

  const confirm = () => {
    setName(prevName)
    setEmail(prevEmail)
    setTel(prevTel)
    setEdition(false)
  }
  const reset = () => {
    setPrevName(name)
    setPrevEmail(email)
    setPrevTel(tel)
    setEdition(false)
  }
  const removeElm = () => dsp(remove(aluno.id))

  return (
    <Ctt.CardFav edit_status={isEditing.toString()}>
      {!isEditing ? <h3>{name}</h3> : <Entry type='text' value={prevName} onChange={editName} />}

      <div style={{ margin: '16px 0' }}>
        {!isEditing
          ? <h4>{email}</h4>
          : <Ctt.Entry2 type='email' value={prevEmail} onChange={editEmail}/>
        }
        {!isEditing
          ? <h4>{tel}</h4>
          : <PhoneInput value={prevTel} onChange={editTel} />
        }
      </div>

      <Ctt.ActionArea>
        {ButtonArea(isEditing, setEdition, confirm, reset, removeElm)}
      </Ctt.ActionArea>
    </Ctt.CardFav>
  )
}

export const ContactComponent = ({ children: aluno }: ContactProp) => {
  const dsp = useDispatch()
  const [isEditing, setEdition] = useState(false)

  const [prevName, setPrevName] = useState(aluno.name)
  const [prevEmail, setPrevEmail] = useState(aluno.email)
  const [prevTel, setPrevTel] = useState(aluno.phone)

  const [name, setName] = useState(aluno.name)
  const [email, setEmail] = useState(aluno.email)
  const [tel, setTel] = useState(aluno.phone)

  const editEmail = ({ target }: ChangeType) => setPrevEmail(target.value)
  const editName = ({ target }: ChangeType) => setPrevName(target.value)
  const editTel = (number : string) => setPrevTel(number)

  function changeFavState() {
    dsp(setFavorite(aluno.id))
  }

  const confirm = () => {
    setName(prevName)
    setEmail(prevEmail)
    setTel(prevTel)
    setEdition(false)
  }
  const reset = () => {
    setPrevName(name)
    setPrevEmail(email)
    setPrevTel(tel)
    setEdition(false)
  }
  const removeElm = () => dsp(remove(aluno.id))

  return (
    <Ctt.Card edit_status={isEditing.toString()}>
      <div>
        <label htmlFor={aluno.id.toString()}>
          <StarIcon filled={aluno.fav} onClick={changeFavState} />
          {!isEditing
            ? <h3>{name}</h3>
            : (
              <Entry type="text" value={prevName} onChange={editName} />
            )
          }
        </label>

        {!isEditing
          ? <h4>{email}</h4>
          : <Ctt.Entry2 type='email' value={prevEmail} onChange={editEmail}/>
        }
        {!isEditing
          ? <h4 className='tel-field'>{formatNumber(tel)}</h4>
          : <PhoneInput value={prevTel} onChange={editTel} />
        }
      </div>
      <Ctt.ActionAreaHz>
        {ButtonArea(isEditing, setEdition, confirm, reset, removeElm)}
      </Ctt.ActionAreaHz>
    </Ctt.Card>
  )
}