import axios from "axios";

const Registro = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form: FormData = new FormData(e.target);
    const object = Object.fromEntries(form)
    console.log(object);
    
    axios.post("https://127.0.0.1:44384/api/User/Register", object)
      .then(res=>{alert(res)})  
      .catch(err=>{console.log(err)});

  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-4">
        <label htmlFor="Email" className="flex text-center flex-col ">
         <h2>Email</h2> 
          <input type="email" name="email" id="" className="border border-solid border-black" placeholder="Email" required />
        </label>
        <label htmlFor="firstName" className="flex text-center flex-col">
          <h2>First Name</h2>
          <input type="text" name="first_Name" id="" className="border border-solid border-black" placeholder="First Name" required/>
        </label>
        <label htmlFor="secondName" className="flex text-center flex-col">
          <h2>Second Name</h2>
          <input type="text" name="second_Name" id="" className="border border-solid border-black" placeholder="Second Name" required/>
        </label>
        <label htmlFor="firstLastname" className="flex text-center flex-col">
          <h2>First Lastname</h2>
          <input type="text" name="first_Lastname" id="" className="border border-solid border-black" placeholder="First Lastname" required/>
        </label>
        <label htmlFor="secondLastname" className="flex text-center flex-col">
          <h2>Second Lastname</h2>
          <input type="text" name="second_Lastname" id="" className="border border-solid border-black" placeholder="Second Lastname" required/>
        </label>
        <label htmlFor="rol" className="flex text-center flex-col">
          <h2>Rol</h2>
          <input type="text" name="rol" id="" className="border border-solid border-black" placeholder="Rol" required/>
        </label>
        <label htmlFor="departament" className="flex text-center flex-col">
          <h2>Departament</h2>
          <input type="text" name="department" id="" className="border border-solid border-black" placeholder="Departament" required/>
        </label>
        <label htmlFor="city" className="flex text-center flex-col">
          <h2>City</h2>
          <input type="text" name="city" id="" className="border border-solid border-black" placeholder="City" required/>
        </label>
        <label htmlFor="birthday" className="flex text-center flex-col">
          <h2>Birthday</h2>
          <input type="datetime-local" name="birthday" id="" className="border border-solid border-black" placeholder="Birthday required"/>
        </label>
        <label htmlFor="password" className="flex text-center flex-col">
          <h2>Password</h2>
          <input type="password" name="password" id="" className="border border-solid border-black" placeholder="Password" required/>
        </label>
        <input type="submit" value="Submit" className="w-20 h-20 bg-red-500 border border-solid border-black " />
      </form>
    </main>
  );
};

export default Registro;
