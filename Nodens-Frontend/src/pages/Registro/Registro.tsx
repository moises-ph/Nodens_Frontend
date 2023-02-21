import React from 'react'

export interface User {
  email: string,
  first_Name: string,
  second_Name: string,
  first_Lastname: string,
  second_Lastname: string,
  rol: string,
  department: string,
  city: string,
  birthdate: Date,
  password: string
      
}

const Registro = () => {
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">
          <input type="text" name="" id="" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </main>
  )
}

export default Registro