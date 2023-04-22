const CreateOffer = () => {
  const handle = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    const object= Object.fromEntries(form);
    console.log(object)
  }
  
  return (
    <>
      <main className="w-full h-fit flex justify-center pt-4 bg-slate-300">
        <form className="w-full flex flex-col items-center bg-transparent gap-4"  onSubmit={handle}>
          <div className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-2xl font-semibold">Titulo de Oferta</h5>
            <input type="text" name="Title" placeholder="Titulo" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md"/>
          </div>
          <div className="w-5/6 h-[30vh] bg-slate-100 rounded-xl p-3 flex flex-col gap-4">
            <h5 className="text-2xl font-semibold">Descripcion de Oferta</h5>
            <textarea name="Description" id="" className="h-4/5 resize-none border-solid border-[1px] border-slate-900 rounded-md"></textarea>
            {/* <input type="text" name="Description" placeholder="Descripcion" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md"/> */}
          </div>
          <div className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-2xl font-semibold">Fecha del evento</h5>
            <input type="date" name="Event_Date" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md"/>
          </div>
          <div className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-2xl font-semibold">Pago de la oferta</h5>
            <input type="number" name="Payment" placeholder="Titulo" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md"/>
          </div>
          <div className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-2xl font-semibold">Titulo de Oferta</h5>
            <input type="text" name="Title" placeholder="Titulo" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md"/>
          </div>
          <div className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-2xl font-semibold">Titulo de Oferta</h5>
            <input type="text" name="Title" placeholder="Titulo" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md"/>
          </div>
          <div className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-2xl font-semibold">Titulo de Oferta</h5>
            <input type="text" name="Title" placeholder="Titulo" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md"/>
          </div>
          <div className="w-5/6 h-1/6 bg-slate-100 rounded-xl p-3 flex flex-col gap-6">
            <h5 className="text-2xl font-semibold">Titulo de Oferta</h5>
            <input type="text" name="Title" placeholder="Titulo" className="h-2/5 border-solid border-[1px] border-slate-900 rounded-md"/>
          </div>
          <input type="submit" className="" value="szszszsz"/>
        </form>
      </main>
    </>
  )
}

export default CreateOffer