import React, { useEffect, useRef, useState } from 'react';
import { BorderedTextModel, Line } from './models';

const BorderedText = ({
	padding = '',
	lineGap = 0,
	globalTextStyle = {},
	borderRadius = 0,
	cornerDirections = {
		topLeft: 'inner',
		topRight: 'inner',
		bottomLeft: 'inner',
		bottomRight: 'inner'
	},
	textAnchor = 'center',
	body
}: BorderedTextModel) => {
	const [lines, setLines] = useState(body.map(line => ({
		content: line.content,
		textStyle: line.textStyle!,
		ref: useRef<SVGTSpanElement>(null),
		dy: 0,
		x: 0
	})));

	useEffect(() => {
		console.log((elementsRef.current[0] as any).getBBox());
	}, [yourText]);

	return (
		<svg>
			<text>
				{body.map((line, index) => (
					<tspan key={index} ref={(el) => (lines[index].ref = el)}>
						{line.content}
					</tspan>
				))}
			</text>
		</svg>
	);
};

export default BorderedText;

/*
const BorderedText = ({
	padding = '',
	lineGap = 0,
	globalTextStyle = {},
	borderRadius = 0,
	cornerDirections = {
		topLeft: 'inner',
		topRight: 'inner',
		bottomLeft: 'inner',
		bottomRight: 'inner'
	},
	textAnchor = 'center',
	body
}: BorderedTextModel) => {
	const [lines, setLines] = useState<Line[]>([]);

	useEffect(() => {
		const result: Line[] = [];

		const measure = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
		measure.innerHTML = 'string';
		console.log(measure.getBBox(()))

		body.forEach((line) => {


			result.push({
				content: line.content,
				textStyle: line.textStyle ?? {},
				dy: 10,
				x: 10
			});
		});

		console.log(result);

		setLines(result);
	}, []);

	return (
		<svg>
			<text>
				{lines.map((line, index) => (
					<tspan x={line.x} dy={line.dy} style={line.textStyle} key={index}>
						{line.content}
					</tspan>
				))}
			</text>
		</svg>
	);
};

export default BorderedText;

* */