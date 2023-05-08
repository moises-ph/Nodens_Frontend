import axios from "axios";

const renewToken = () =>  {
  const request = axios.create({
    baseURL: 'http://nodensauth.gqdjevebebg0aba3.eastus.azurecontainer.io/api',
    headers: {"Authorization": localStorage.getItem('renewToken')}
  })
  request.put(`/auth/renew?token=${localStorage.getItem('authTokenForTheUser')}`)
    .then(res => localStorage.setItem("authTokenForTheUser", res.data.ttoken))
}

export default renewToken;