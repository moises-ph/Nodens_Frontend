import React from "react";

export interface User {
  email: string;
  first_Name: string;
  second_Name: string;
  first_Lastname: string;
  second_Lastname: string;
  rol: string;
  department: string;
  city: string;
  birthdate: Date;
  password: string;
}

const Registro = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const object = Object.fromEntries(form)
    console.log(object);
    
  };
  return (
    <main>
      <form onSubmit={handleSubmit} className="flex justify-center items-start flex-col flex-wrap gap-4">
        <label htmlFor="Email" className="flex flex-col">
          Email
          <input type="email" name="Email" id="" className="border border-solid border-black" placeholder="Email" required />
        </label>
        <label htmlFor="firstName" className="flex flex-col">
          First Name
          <input type="text" name="firstName" id="" className="border border-solid border-black" placeholder="First Name" required/>
        </label>
        <label htmlFor="secondName" className="flex flex-col">
          Second Name
          <input type="text" name="secondName" id="" className="border border-solid border-black" placeholder="Second Name" required/>
        </label>
        <label htmlFor="firstLastname" className="flex flex-col">
          First Lastname
          <input type="text" name="firstLastname" id="" className="border border-solid border-black" placeholder="First Lastname" required/>
        </label>
        <label htmlFor="secondLastname" className="flex flex-col">
          Second Lastname
          <input type="text" name="secondLastname" id="" className="border border-solid border-black" placeholder="Second Lastname" required/>
        </label>
        <label htmlFor="rol" className="flex flex-col">
          Rol
          <input type="text" name="rol" id="" className="border border-solid border-black" placeholder="Rol" required/>
        </label>
        <label htmlFor="departament" className="flex flex-col">
          Departament
          <input type="text" name="departament" id="" className="border border-solid border-black" placeholder="Departament" required/>
        </label>
        <label htmlFor="city" className="flex flex-col">
          City
          <input type="text" name="city" id="" className="border border-solid border-black" placeholder="City" required/>
        </label>
        <label htmlFor="birthday" className="flex flex-col">
          Birthday
          <input type="date" name="birthday" id="" className="border border-solid border-black" placeholder="Birthday required"/>
        </label>
        <label htmlFor="password" className="flex flex-col">
          Password
          <input type="password" name="password" id="" className="border border-solid border-black" placeholder="Password" required/>
        </label>
        <input type="submit" value="Submit" className="w-20 h-20 bg-red" />
      </form>
    </main>
  );
};

export default Registro;
