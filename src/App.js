import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Header } from './components/header/header'
import { Home } from './pages/home/home'
import { AllLavka } from './pages/products/yandex_products/all_lavka'
import './scss/app.scss'

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/fromLavka' element={<AllLavka />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
