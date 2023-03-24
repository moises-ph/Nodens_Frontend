import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {App, Error, Offers, Posts, Profiles} from '../pages'

export const AppRouter = () => {
	return (
		<>
			<Router>
				<main>
					<Routes>
						<Route path='/' element={<App />}></Route>
						<Route path='/posts' element={<Posts />}></Route>
						<Route path='/offers' element={<Offers />}></Route>
						<Route path='/profile' element={<Profiles />}></Route>						<Route path='*' element={<Error />}></Route>
					</Routes>
				</main>
			</Router>
		</>
	)
}
