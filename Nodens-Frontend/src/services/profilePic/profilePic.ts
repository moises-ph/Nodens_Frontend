import axios from "axios"

export const profilePic = (url: string, image: any) => {
  const client = axios.create({
    headers: {
      Authorization : `Bearer ${localStorage.getItem('authTokenForTheUser')}`,
      "Content-Type": 'multipart/form-data',
    }
  });
  client.post(url, image)
}