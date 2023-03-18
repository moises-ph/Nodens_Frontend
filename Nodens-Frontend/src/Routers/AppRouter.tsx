import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {App} from '../pages'

export const AppRouter = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<App />}></Route>
				</Routes>
			</Router>
		</>
	)
}