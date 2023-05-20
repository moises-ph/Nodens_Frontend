import axios from "axios"

export const clientHttp = () => {
  const client = axios.create({
    baseURL: 'https://nodensapim.azure-api.net',
    headers: {Authorization : `Bearer ${localStorage.getItem('authTokenForTheUser')}`}
  })
  return client
}
