const BorderedText = (props: {
	content: string[];
	borderRadius: number;
	textAnchor: 'start' | 'middle' | 'end';
	padding: number | string;
}) => {
	const { borderRadius, content, textAnchor, padding } = props;

	return (
		<>
			<iframe
				src={`./borderedText/borderedText.html?border=${encodeURIComponent(
					borderRadius
				)}&anchor=${encodeURIComponent(
					textAnchor
				)}&content=${encodeURIComponent(
					JSON.stringify(content)
				)}&padding=${encodeURIComponent(padding)}`}
			></iframe>
		</>
	);
};

/*
Example usage:

	<BorderedText
		content={[
			'O viziune modernă asupra',
			'schițelor lui Caragiale'
		]}
		textAnchor="middle"
		borderRadius={10}
		padding={'2 4 1.1 4'}
	/>

*/

export default BorderedText;
