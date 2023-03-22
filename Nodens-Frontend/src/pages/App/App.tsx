import { Link, useNavigate } from "react-router-dom";

const App = () => {
  

  const handleClick = () => {
    localStorage.removeItem('authTokenForTheUser');
    location.reload()
  }
  return (
    <>
    <main className=''>
      <div>App sfighodf</div>
      <button onClick={handleClick}>Desloguearse</button>
    </main>
    </>
  )
}

export default App