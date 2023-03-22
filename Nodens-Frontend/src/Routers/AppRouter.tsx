import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {App, Error, Posts} from '../pages'

export const AppRouter = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<App />}></Route>
					<Route path='/posts' element={<Posts />}></Route>
					<Route path='*' element={<Error />}></Route>

				</Routes>
			</Router>
		</>
	)
}
