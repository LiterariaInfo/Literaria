import { Route, Routes } from 'react-router-dom';
import { createContext, lazy, RefObject, Suspense, useRef } from 'react';
import './App.scss';
import NavBar from './components/navbar/NavBar.tsx';

export const AppContext = createContext<{
	scrollRef: RefObject<HTMLDivElement>;
} | null>(null);

const Home = lazy(() => import('./pages/Home/Home.tsx'));
const About = lazy(() => import('./pages/About/About.tsx'));
const Category = lazy(() => import('./pages/Category/Category.tsx'));
const Article = lazy(() => import('./pages/Article/Article.tsx'));
const Admin = lazy(() => import('./pages/Admin/Admin.tsx'));

const App = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	return (
		<AppContext.Provider
			value={{
				scrollRef
			}}
		>
			<NavBar />
			<div ref={scrollRef} className='category-slide'>
				<Suspense fallback={<></>}>
					<Routes>
						<Route index path='/' element={<></>} />
						{/*<Route path='/about' element={<About />} />*/}
						<Route path='/category/:categoryID' element={<></>} />
						{/*<Route path='/article/:articleID' element={<Article />} />
						<Route path='/admin' element={<Admin />} />*/}
					</Routes>
				</Suspense>
			</div>
		</AppContext.Provider>
	);
}

export default App;
