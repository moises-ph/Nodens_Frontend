import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {App, Error} from '../pages'

export const AppRouter = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<App />}></Route>
					<Route path='*' element={<Error />}></Route>
				</Routes>
			</Router>
		</>
	)
}
