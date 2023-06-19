import axios from "axios"

export const clientHttp = () => {
  const client = axios.create({
    baseURL: 'https://nodensgapi.azure-api.net',
    headers: {Authorization : `Bearer ${localStorage.getItem('authTokenForTheUser')}`}
  })
  return client
}
