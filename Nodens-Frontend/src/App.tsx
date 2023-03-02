import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home, Login, Registro } from './pages'

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home />}></Route>
          <Route path='/registro' element={<Registro />}></Route>
          <Route path='/login' element={<Login />}></Route>
          {/* <Route path='/' element={}></Route>
          <Route path='/' element={}></Route>
          <Route path='/' element={}></Route>
          <Route path='/' element={}></Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
