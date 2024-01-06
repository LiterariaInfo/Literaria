'use client';

import './button.scss';
import downArrow from '../../../public/icons/down-arrow.svg';
import { motion } from 'framer-motion';

const NextSectionButton = (props: { text: string; onClick: () => void }) => {
	const { text, onClick } = props;

	return (
		<div className='next-section-button' onClick={onClick}>
			<label>{text}</label>
			<motion.img src={downArrow} alt='down-arrow' />
		</div>
	);
};

export default NextSectionButton;
