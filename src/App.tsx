import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.scss';
import NavBar from './components/navbar/NavBar.tsx';

const Home = lazy(() => import('./pages/Home/Home.tsx'));
const About = lazy(() => import('./pages/About/About.tsx'));
const Category = lazy(() => import('./pages/Category/Category.tsx'));
const Article = lazy(() => import('./pages/Article/Article.tsx'));
const Admin = lazy(() => import('./pages/Admin/Admin.tsx'));

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/category/:categoryID' element={<Category />} />
				<Route path='/article/:articleID' element={<Article />} />
				<Route path='/admin' element={<Admin />} />
			</Routes>
		</>
	);
}

export default App;
