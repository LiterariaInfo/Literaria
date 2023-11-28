const BorderedText = (props: {
	content: string[];
	borderRadius: number;
	textAnchor: 'start' | 'middle' | 'end';
	padding: number | string;
	lineGap: number;
	fontSize: number;
}) => {
	const { borderRadius, content, textAnchor, padding, lineGap, fontSize } = props;

	return (
		<>
			<iframe
				src={`./borderedText/borderedText.html?border=${encodeURIComponent(
					borderRadius
				)}&anchor=${encodeURIComponent(textAnchor)}&content=${encodeURIComponent(
					JSON.stringify(content)
				)}&padding=${encodeURIComponent(padding)}&gap=${encodeURIComponent(
					lineGap
				)}&font=${encodeURIComponent(fontSize)}`}
			></iframe>
		</>
	);
};

/*
Example usage:

	<BorderedText
				content={[
					'O vițfune Â|modernă asupra',
					'schițflor Â|i Caragiale',
					"seoițfewuiÂ|iesofwa",
					'w3rrțff3wrÂ|wwww'
				]}
				textAnchor="middle"
				borderRadius={16}
				padding={'2 4 2 4'}
				lineGap={0}
				fontSize={10}
			/>

*/

export default BorderedText;
