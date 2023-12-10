const searchParams = new URLSearchParams(window.location.search);

const borderRadius = +searchParams.get('border');
const textAnchor = searchParams.get('anchor');
const content = JSON.parse(searchParams.get('content'));
const lineGap = +searchParams.get('gap');
const fontSize = +searchParams.get('font');
const padding = searchParams.get('padding').trim().split(' ');

function drawLimits(box, color) {
	svg.innerHTML += `<circle cx='${box.x}' cy='${box.y}' r='1' fill='${color}' />`;
	svg.innerHTML += `<circle cx='${box.x + box.width}' cy='${box.y}' r='1' fill='${color}' />`;
	svg.innerHTML += `<circle cx='${box.x}' cy='${box.y + box.height}' r='1' fill='${color}' />`;
	svg.innerHTML += `<circle cx='${box.x + box.width}' cy='${
		box.y + box.height
	}' r='1' fill='${color}' />`;
}

let paddingTop, paddingRight, paddingBottom, paddingLeft;

if (padding.length === 1) {
	paddingTop = paddingRight = paddingBottom = paddingLeft = +padding[0];
} else if (padding.length === 2) {
	paddingTop = paddingBottom = +padding[0];
	paddingLeft = paddingRight = +padding[1];
} else if (padding.length === 4) {
	paddingTop = +padding[0];
	paddingRight = +padding[1];
	paddingBottom = +padding[2];
	paddingLeft = +padding[3];
}

const xmlns = 'http://www.w3.org/2000/svg';

const svg = document.getElementById('svg');
const text = document.getElementById('text');

content.forEach((value) => {
	const ts = document.createElementNS(xmlns, 'tspan');
	ts.setAttributeNS(null, 'font-size', fontSize);
	ts.setAttributeNS(null, 'x', '50%');
	ts.setAttributeNS(null, 'text-anchor', textAnchor);
	ts.appendChild(document.createTextNode(value));
	text.appendChild(ts);
});

svg.appendChild(text);

const boxes = [];

for (let tspan of document.getElementsByTagNameNS(xmlns, 'tspan')) {
	const rect = tspan.getBBox();

	tspan.setAttributeNS(null, 'dy', String(rect.height + lineGap / 2));

	rect.y += rect.height;

	boxes.push(rect);
}

for (let i = 0; i < boxes.length; i++) {
	// drawLimits(boxes[i], 'red');

	boxes[i].x -= paddingLeft;
	boxes[i].width += paddingLeft + paddingRight;
	boxes[i].y -= paddingTop;
	boxes[i].height += paddingTop + paddingBottom;

	//drawLimits(boxes[i], 'blue');
}

for (let i = 0; i < boxes.length; i++) {
	if (boxes[i + 1]) {
		boxes[i + 1].height -= boxes[i].y + boxes[i].height - boxes[i + 1].y;
		boxes[i + 1].y = boxes[i].y + boxes[i].height;
		//boxes[i + 1].height -= 4
	}
}

let d = '';

d += `M ${boxes[0].x + boxes[0].width / 2} ${boxes[0].y} `;

for (let i = 0; i < boxes.length; i++) {
	let m1 =
		Math.min(
			Math.abs(boxes[i].width - (boxes[i - 1] === undefined ? 0 : boxes[i - 1].width)) / 2,
			boxes[i].height
		) / 2;

	let m2 =
		Math.min(
			Math.abs((boxes[i + 1] === undefined ? 0 : boxes[i + 1].width) - boxes[i].width) / 2,
			boxes[i].height
		) / 2;

	m1 = Math.min(m1, borderRadius);

	m2 = Math.min(m2, borderRadius);

	d += `L 
    ${
			boxes[i].x +
			boxes[i].width +
			(boxes[i].width > (boxes[i - 1] === undefined ? 0 : boxes[i - 1].width) ? -m1 : m1)
		} 
    ${boxes[i].y}

    A ${m1} ${m1} 0 0 ${+(boxes[i].width > (boxes[i - 1] === undefined ? 0 : boxes[i - 1].width))}
    ${boxes[i].x + boxes[i].width}
    ${boxes[i].y + m1}

    L
    ${boxes[i].x + boxes[i].width}
    ${boxes[i].y + boxes[i].height - m2}
    
    A ${m2} ${m2} 0 0 ${+(boxes[i].width > (boxes[i + 1] === undefined ? 0 : boxes[i + 1].width))}
    ${
			boxes[i].x +
			boxes[i].width +
			(boxes[i].width > (boxes[i + 1] === undefined ? 0 : boxes[i + 1].width) ? -m2 : m2)
		} 
    ${boxes[i].y + boxes[i].height}`;
}

for (let i = boxes.length - 1; i >= 0; i--) {
	let m1 =
		Math.min(
			Math.abs(boxes[i].width - (boxes[i + 1] === undefined ? 0 : boxes[i + 1].width)) / 2,
			boxes[i].height
		) / 2;

	let m2 =
		Math.min(
			Math.abs((boxes[i - 1] === undefined ? 0 : boxes[i - 1].width) - boxes[i].width) / 2,
			boxes[i].height
		) / 2;

	m1 = Math.min(m1, borderRadius);

	m2 = Math.min(m2, borderRadius);

	d += `L
    ${
			boxes[i].x +
			(boxes[i].width < (boxes[i + 1] === undefined ? 0 : boxes[i + 1].width) ? -m1 : m1)
		}
    ${boxes[i].y + boxes[i].height}

    A ${m1} ${m1} 0 0 ${+(boxes[i].width > (boxes[i + 1] === undefined ? 0 : boxes[i + 1].width))}
    ${boxes[i].x}
    ${boxes[i].y + boxes[i].height - m1}

    L
    ${boxes[i].x}
    ${boxes[i].y + m2}

    A ${m2} ${m2} 0 0 ${+(boxes[i].width > (boxes[i - 1] === undefined ? 0 : boxes[i - 1].width))}
    ${
			boxes[i].x +
			(boxes[i].width > (boxes[i - 1] === undefined ? 0 : boxes[i - 1].width) ? m2 : -m2)
		} 
    ${boxes[i].y}
    `;
}

d += 'Z';

const path = document.createElementNS(xmlns, 'path');

path.setAttribute('d', d);

svg.prepend(path);
