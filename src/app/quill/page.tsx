'use client';

import QuillEditor from 'react-quill';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

export default () => {
	const [value, setValue] = useState('');

	console.log(value);

	return (
		<section className='pt-[12rem] mobile:pt-20 pb-12 items-center'>
			<QuillEditor
				className={''}
				theme='snow'
				value={value}
				onChange={(value) => setValue(value)}
			/>
			<button onClick={() => navigator.clipboard.writeText(value)}>Copy</button>
		</section>
	);
};
