import gif from "../../images/Astronauta.gif"

const Error = () => {
  return (
    <>
      <main className="bg-blue-700 w-full h-screen flex justify-center align-center fondo1">
        <div className="pt-56">
        <div className="flex justify-between align-center flex-col h-2/4 ">
          <p className="text-slate-50 relative w-full text-center tracking-widest box-reflect"><span className="" >Look like you're lost in space</span> </p>
          <h1 className="relative w-full text-center text-9xl tracking-widest" >
          <span className="text-white span">4</span>
          <span className="text-white span">0</span>
          <span className="text-white span delay-300">4</span>
            </h1>
          <a href="/" className="text-white text-3xl self-center span hover:translate-y-2 transition-all duration-150 rotate-6 hover:rotate-12  active:translate-y-0.5">Go back</a>
        </div>
        </div>
      </main>
    </>
  );
};

export default Error;
