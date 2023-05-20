import axios from "axios";

const renewToken = () =>  {
  console.log(localStorage.getItem('authTokenForTheUser'));
  
  const request = axios.create({
    baseURL: 'https://nodensapim.azure-api.net/',
    headers: {"Authorization": localStorage.getItem('renewToken')}
  })
  request.put(`/auth/api/auth/renew?token=${localStorage.getItem('authTokenForTheUser')}`)
    .then(res => localStorage.setItem("authTokenForTheUser", res.data.ttoken))
}

export default renewToken;