import React, { CSSProperties } from 'react';

type cornerDirection = 'outer' | 'straight' | 'inner';

export interface BorderedTextModel {
	padding?: string;
	lineGap?: number;
	globalTextStyle?: CSSProperties;
	borderRadius?: number;
	cornerDirections?: {
		topLeft?: cornerDirection;
		topRight?: cornerDirection;
		bottomRight?: cornerDirection;
		bottomLeft?: cornerDirection;
	};
	textAnchor?: 'left' | 'center' | 'right';
	body: {
		content: string;
		textStyle?: CSSProperties;
	}[];
}

export interface Line {
	content: string;
	textStyle: CSSProperties;
	x: number;
	dy: number;
	ref:  React.MutableRefObject<SVGTSpanElement>;
}