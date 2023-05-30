import axios from "axios";

const renewToken = async () =>  {
  console.log(localStorage.getItem('authTokenForTheUser'));
  
  const request = axios.create({
    baseURL: 'https://nodensapi.azure-api.net',
    headers: {"Authorization": localStorage.getItem('renewToken')}
  })
  return await request.put(`/auth/api/auth/renew?token=${localStorage.getItem('authTokenForTheUser')}`)
    .then(res => localStorage.setItem("authTokenForTheUser", res.data.ttoken))
}

export default renewToken;
