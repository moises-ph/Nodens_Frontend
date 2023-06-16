import axios from "axios";
import Swal from "sweetalert2";

export const videoMusician = (url: string, video: FileList) => {
  return new Promise((res, rej) => {
    const client = axios.create({
      headers: {
        Authorization : `Bearer ${localStorage.getItem('authTokenForTheUser')}`,
        "Content-Type": 'multipart/form-data',
        "Accept" : 'multipart/form-data'
      }
    });
    console.log(video);
    const form = new FormData();
    form.append("file", video[0]);
    client.post("https://nodensgapi.azure-api.net"+url, form)
      .then(response => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1000
        });
        res(response);
      })
      .catch(err => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: err.data.message,
          showConfirmButton: false,
          timer: 1000
        });
      });
  });
}