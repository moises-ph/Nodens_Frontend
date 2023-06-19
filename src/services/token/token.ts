import axios from "axios";

const renewToken = async () =>  {  
  const request = axios.create({
    baseURL: 'https://nodensgapi.azure-api.net',
    headers: {"Authorization": localStorage.getItem('renewToken')}
  })
  return await request.put(`/auth/api/auth/renew?token=${localStorage.getItem('authTokenForTheUser')}`)
    .then(res => localStorage.setItem("authTokenForTheUser", res.data.ttoken))
}

export default renewToken;
