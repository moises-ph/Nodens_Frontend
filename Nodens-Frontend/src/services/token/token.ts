import axios from "axios";

const renewToken = () =>  {
  const request = axios.create({
    baseURL: 'http://nodensauth.gqdjevebebg0aba3.eastus.azurecontainer.io/api',
    headers: {"X-RenewToken": localStorage.getItem('authTokenForTheUser')}
  })
  request.put(`/auth/renew?token=${localStorage.getItem('authTokenForTheUser')}`)
    .then(res => console.log(res))
}

export default renewToken;