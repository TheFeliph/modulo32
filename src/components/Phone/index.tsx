/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from 'react'

import { cleanNumber, formatNumber } from '../../utils/tools'
import { InputPhone, InputPhoneBorder } from './phone.style'

type PhoneType = {
  border?: boolean
  value: string
  onChange: (phoneNumber: string) => void
}

const PhoneInput = ({ border, value, onChange }: PhoneType) => {
  const [phone, setPhone] = useState(value)

  useEffect(() => {
    setPhone(formatNumber(value))
  }, [value])

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(cleanNumber(evt.target.value))
  }

  return (
    <>
      {!border ? (
        <InputPhone
          type="tel"
          className='tel-field'
          value={phone}
          onChange={handleChange}
          placeholder="(xx) xxxx-xxxx"
          maxLength={16}
        />
      ) : (
        <InputPhoneBorder
          type="tel"
          value={phone}
          onChange={handleChange}
          placeholder="(xx) xxxx-xxxx"
          maxLength={16}
        />
      )}
    </>
  )
}

export default PhoneInput