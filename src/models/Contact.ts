import { CategoryType } from '../utils/types'

class ContactModel {
  id: number
  name: string
  email: string
  phone: string
  category: CategoryType
  fav: boolean

  constructor(
    id: number,
    _name: string,
    _email: string,
    _phone: string,
    _cat: CategoryType,
    fav: boolean,
  ) {
    this.id = id
    this.name = _name
    this.email = _email
    this.phone = _phone
    this.category = _cat
    this.fav = fav
  }
}

export default ContactModel