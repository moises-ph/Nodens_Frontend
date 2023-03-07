import axios from "axios";

const Login = () => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const form: FormData = new FormData(e.target);
    const data = Object.fromEntries(form);

    console.log(data);
    
    axios.post('https://localhost:44384/', data)
      .then(res => console.log(res))
      .catch(err=> console.log(err))
  }
  return (
    <>
      <main>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" placeholder="Email"/>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="" placeholder="Contraseña"/>
          <input type="submit" className="cursor-pointer" value="Iniciar Sesion" />
        </form>
      </main>
    </>
  )
}

export default Login