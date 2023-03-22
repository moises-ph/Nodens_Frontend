import { Link, useNavigate } from "react-router-dom";

const App = () => {
  

  const handleClick = () => {
    localStorage.removeItem('authTokenForTheUser');
    location.reload()
  }
  return (
    <>
    <main className=''>
      <div></div>
      <button onClick={handleClick}>Salir</button>
    </main>
    </>
  )
}

export default App