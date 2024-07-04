import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import PhoneInput from '../../components/Phone'
import { ButtonSave, MainContainer, TitleResult } from '../../styles/global'
import { CategoryType, ChangeType } from '../../utils/types'

import * as Reg from './form.style'
import { add } from '../../redux/contacts'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [fav, setFav] = useState(false)
  const [tel, setTel] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [type, setType] = useState(CategoryType.COMMON)

  const changePhone = (number: string) => setTel(number)
  const changeType = ({ target }: ChangeType) => {
    const value = target.value
    console.log(value)
    setType(value as CategoryType)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    console.log(name, email, tel, type, fav)
    dispatch(add({
      name,
      email,
      phone: tel,
      category: type,
      fav,
    }))
    navigate('/')
  }

  return (
    <MainContainer>
      <TitleResult>Novo Contato</TitleResult>

      <Reg.Form onSubmit={handleSubmit}>
        <Reg.Name
          type="text"
          id={name}
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Nome"
        />
        <Reg.Email
          value={email}
          type="email"
          id={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="E-mail"
        />
        <PhoneInput border value={tel} onChange={changePhone} />

        <Reg.Options>
          <Reg.Option>
            <label htmlFor="fav">favorito:</label>
            <input
              checked={fav}
              onChange={(evt) => setFav(evt.target.checked)}
              type="checkbox"
              name="fav"
              id="fav"
            />
          </Reg.Option>
        </Reg.Options>

        <Reg.Options>
          <p> Tipo:</p>

          <Reg.Option key={CategoryType.COMMON}>
            <input
              type="radio"
              name="categoria"
              id={CategoryType.COMMON}
              value={CategoryType.COMMON}
              onChange={(evt) => changeType(evt)}
              checked={type === CategoryType.COMMON}
              // defaultChecked={type === CategoryType.COMMON}
            />{' '}
            <label htmlFor={CategoryType.COMMON}>{CategoryType.COMMON}</label>
          </Reg.Option>
          <Reg.Option key={CategoryType.FAMILY}>
            <input
              type="radio"
              name="categoria"
              id={CategoryType.FAMILY}
              value={CategoryType.FAMILY}
              onChange={(evt) => changeType(evt)}
              // defaultChecked={type === CategoryType.COMMON}
            />{' '}
            <label htmlFor={CategoryType.FAMILY}>{CategoryType.FAMILY}</label>
          </Reg.Option>
          <Reg.Option key={CategoryType.WORK}>
            <input
              type="radio"
              name="categoria"
              id={CategoryType.WORK}
              value={CategoryType.WORK}
              onChange={(evt) => changeType(evt)}
              // defaultChecked={type === CategoryType.COMMON}
            />{' '}
            <label htmlFor={CategoryType.WORK}>{CategoryType.WORK}</label>
          </Reg.Option>
        </Reg.Options>

        {/* <Reg.Options>
          <p> Tipo:</p>
          {Object.values(CategoryType).map((cat) => (
            <Reg.Option key={cat}>
              <input
                value={cat}
                type="radio"
                onChange={({ target }) =>
                  console.log(target.value as CategoryType)
                }
                name="categoria"
                id={cat}
                defaultChecked={type === CategoryType.COMMON}
              />{' '}
              <label htmlFor={cat}>{cat}</label>
            </Reg.Option>
          ))}
        </Reg.Options> */}

        <ButtonSave type="submit">Salvar</ButtonSave>
      </Reg.Form>
    </MainContainer>
  )
}

export default RegisterForm