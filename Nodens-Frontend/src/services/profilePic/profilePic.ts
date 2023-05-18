import axios from "axios";

const profilePic = (baseURL: string, image: any) => {
  axios.create({
    baseURL,
    headers: { 
      Authorization : `Bearer ${localStorage.getItem('authTokenForTheUser')}`,
      "Content-Type": image.type,
      "Content-Length": `${image.size}`
    },
  });
  axios.post('')
}

export default profilePic;