import axios from "axios"

const client = () => {
  const headers = !localStorage.getItem('authTokenForTheUser') ? {} : {
    Authorization : `Bearer ${localStorage.getItem('authTokenForTheUser')}`
  }
  const client = axios.create({
    baseURL: 'https://nodensapim.azure-api.net',
    headers
  })
  return client
}

export const clientHttp = client()