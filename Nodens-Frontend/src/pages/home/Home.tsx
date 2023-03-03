import ImagenPrincipal from "../../images/Fondo.png"


function Home() {
  return (
    <>  
      <main>
        <img src={ImagenPrincipal} />
        <h1 className="text-9xl hover:text-red-500">Home</h1>
      </main>
    </>
  )
}

export default Home