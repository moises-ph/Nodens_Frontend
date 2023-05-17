import axios from "axios";

const renewToken = () =>  {
  const request = axios.create({
    baseURL: 'https://nodensapim.azure-api.net/auth/api',
    headers: {"Authorization": localStorage.getItem('renewToken')}
  })
  request.put(`/auth/renew?token=${localStorage.getItem('authTokenForTheUser')}`)
    .then(res => localStorage.setItem("authTokenForTheUser", res.data.ttoken))
}

export default renewToken;