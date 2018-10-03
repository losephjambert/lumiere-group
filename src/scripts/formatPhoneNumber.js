const formatPhoneNumber = (phoneNumber,format) => {

  const cleaned = ('' + phoneNumber).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    switch(format){
      case 'DOT':
        return `${match[1]}.${match[2]}.${match[3]}`
        break;
      case 'HYPHEN':
        return `${match[1]}-${match[2]}-${match[3]}`
        break;
      case 'DEFAULT':
        return `(${match[1]}) ${match[2]}-${match[3]}`
        break;
      case 'TEL':
        return `1-${match[1]}-${match[2]}-${match[3]}`
        break;
      case 'INTERNATIONAL':
        return `+1 (${match[1]}) ${match[2]}-${match[3]}`
        break;
      default:
        return `(${match[1]}) ${match[2]}-${match[3]}`
      } 
  }
  return `A 9-digit phone number must be passed as the first parameter. You passed: ${phoneNumber}`
}

export default formatPhoneNumber