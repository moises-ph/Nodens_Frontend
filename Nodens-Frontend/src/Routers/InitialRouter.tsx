import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home, Login, Registro, Error } from '../pages'
import {Nav} from '../components'
import { links } from '../components/Nav/Nav'

const routes: links[] = [
  {
    icon: '',
    route: '/',
    text: 'Home'
  },
  {
    icon: '',
    route: '/registro',
    text: 'Registro'
  },
  {
    icon: '',
    route: '/login',
    text: 'Login'
  }
]

export const InitialRouter = () => {
  return (
    <>
    	<Router>
        <Nav links={routes}/>
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
