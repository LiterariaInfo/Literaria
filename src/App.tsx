import './App.scss';
import BorderedText from './components/BorderedText.tsx';

function App() {
	return (
		<>
			<BorderedText
				content={[
					'O vițfune Â|modernă asupra',
					'schițflor Â|i Caragiale',
					"seoițfewuiÂ|iesof",
					'w3rrțff3wrÂ|w3r3wrw3r3wrw3rw3rwrw3r'
				]}
				textAnchor="middle"
				borderRadius={2}
				padding={'2 4 2 4'}
				lineGap={0}
				fontSize={10}
			/>
		</>
	);
}

export default App;
