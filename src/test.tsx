import { useEffect, useRef, useState } from 'react';

export const Test = () => {
	const tspansRef = useRef<SVGTSpanElement[]>([]);

	const [circles, setCircles] = useState<{ x: number, y: number }[]>([]);

	useEffect(() => {
		// Get the bounding box of each tspan
		const bboxes = tspansRef.current.map((tspan) => (tspan as any).getBBox());

		let c = []
		bboxes.forEach((b, index) => {
			c = [...c, { x: b.x, y: b.y }, { x: b.x + b.width, y: b.y }, { x: b.x, y: b.y + b.height }]

		})

		setCircles(c);

		console.log('Bounding boxes of tspans:', bboxes);
	}, []);

	return (
		<svg width='200' height='100'>
			{/* Render the list of tspans */}
			<text x='10' y='30' fontFamily='Arial' fontSize='16'>
				<tspan ref={(el) => (tspansRef.current[0] = el!)}>Tspan 1</tspan>
				<tspan x='0' dy='20' ref={(el) => (tspansRef.current[1] = el!)}>
					Tspan 2
				</tspan>
				<tspan x='0' dy='20' ref={(el) => (tspansRef.current[2] = el!)}>
					Tspan 3
				</tspan>
			</text>
			{
				circles.map((iii) => <circle cx={iii.x} cy={iii.y} color={'red'} r={'1px'} fill={'red'}></circle>)
			}
		</svg>
	);
};
