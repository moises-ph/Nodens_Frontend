const App = () => {
  const handleClick = () => {
    localStorage.removeItem('authTokenForTheUser');
    location.reload()
  }
  return (
    <>
    <main className='bg-gradient-to-br from-orange-400 to-fuchsia-700 h-screen'>
      <div>
          
      </div>
      <button onClick={handleClick}>Salir</button>
    </main>
    </>
  )
}

export default App