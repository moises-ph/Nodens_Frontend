const App = () => {
  const handleClick = () => {
    localStorage.removeItem('authTokenForTheUser');
    location.reload()
  }
  return (
    <>
    <main className='bg-[#003F5A] h-screen'>
      <div>
          
      </div>
      <button onClick={handleClick}>Salir</button>
    </main>
    </>
  )
}

export default App 