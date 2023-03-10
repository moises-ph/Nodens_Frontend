import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home, Login, Registro, Error } from '../pages'

export const InitialRouter = () => {
  return (
    <>
    	<Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/registro' element={<Registro />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  )
}
