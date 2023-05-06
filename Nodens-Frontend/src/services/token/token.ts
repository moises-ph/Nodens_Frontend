import axios from "axios";

const renewToken = () =>  {
  const request = axios.create({
    baseURL: 'http://20.242.223.125/api',
    headers: { Authorization : `Bearer ${localStorage.getItem('authTokenForTheUser')}` }
  })
  request.put(`/auth/renew?token=${localStorage.getItem('authTokenForTheUser')}`, )
    .then(res => console.log(res))
}

export default renewToken;