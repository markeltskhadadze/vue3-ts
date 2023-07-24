 function headersConfig() {
  const token: string | null = localStorage.getItem('token')
  if (typeof token === 'string') {
    const headers = {
      Authorization: token
    }
    return headers
  }
}

export const headers = headersConfig()