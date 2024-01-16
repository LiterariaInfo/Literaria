'use client';

import SliderImages from '@/app/_sections/Landing/SliderImages';
import { categories } from '../../../public/text/carouselContent';
import SliderIndicator from '@/app/_sections/Landing/SliderIndicator';
import useCarousel from '@/app/_sections/Landing/useCarousel';
import SliderLabel from '@/app/_sections/Landing/SliderLabel';
import NextItemButton from '@/components/buttons/NextItemButton';
import Script from 'next/script';

export default () => {
	const { currentSlide, setCurrentSlide } = useCarousel();

	const handleNextItemClick = () => {
		setCurrentSlide((currentSlide + 1) % categories.length);
	};

	return (
		<section
			id='3'
			className='section flex-col pt-[12rem] mobile:pt-20 pb-12 items-center'
		>
			<div className='w-[88vw] h-[73vh] mobile:h-[80vh] bg-cover bg-center box-border relative rounded-[3.5rem]'>
				<SliderImages currentSlide={currentSlide} />
				<SliderLabel
					logo={categories[currentSlide].logo}
					title={categories[currentSlide].title}
				/>
				<SliderIndicator
					currentSlide={currentSlide}
					setCurrentSlide={setCurrentSlide}
				/>
				<NextItemButton
					className='hidden mobile:flex absolute right-4 top-1/2 -translate-y-1/2'
					onClick={handleNextItemClick}
				/>
			</div>
			<Script
				dangerouslySetInnerHTML={{
					__html: `
				const main = document.getElementById('main');
				let ok = 0;
    		const observer = new IntersectionObserver((entries, observer) => {
  				entries.forEach(entry => {
						if (entry.isIntersecting) {
								if (ok) {
									main.style.overflowY = 'hidden';
								} else {
									ok = 1
								}
								
								entry.target.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
						}
					});
				}, {
  				threshold: 0.000000001,
				});

    		observer.observe(document.getElementById('3'));
    		observer.observe(document.getElementById('4'));
    		observer.observe(document.getElementById('5'));
    		
    		main.onscrollend = () => {
    			main.style.overflowY = 'auto';
    		}
    		
    		const handleScroll = (event) => {
					event.preventDefault();
					if (main.style.overflowY !== 'hidden') {
						document.getElementById('main').scrollBy(0, event.deltaY > 0 ? 1 : -1);
					}
				}
				
				window.addEventListener('wheel', handleScroll, { passive: false });
				`
				}}
			/>
		</section>
	);
};
