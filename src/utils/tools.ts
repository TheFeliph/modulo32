export const cleanNumber = (boilerplate: string) =>
    boilerplate.replace(/\D/g, '') // Remove todos os caracteres não numéricos
  
  export const formatNumber = (phoneNumber: string) => {
    const numb = cleanNumber(phoneNumber)
    let formatted = ''
  
    if (numb.length > 2) {
      formatted += `(${numb.slice(0, 2)}) `
  
      if (numb.length > 6) {
        formatted += `${numb.slice(2, 6)}-`
        formatted += `${numb.slice(6)}`
        if (numb.length > 10) {
          formatted = `(${numb.slice(0, 2)}) `
          formatted += `${numb.slice(2, 3)} `
          formatted += `${numb.slice(3, 7)}-`
          formatted += `${numb.slice(7, 11)}`
        }
      } else {
        formatted += `${numb.slice(2)}`
      }
    } else {
      formatted = numb
    }
  
    return formatted
  }
  
  export const plainContact = (srt: string): string =>
    srt
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase()