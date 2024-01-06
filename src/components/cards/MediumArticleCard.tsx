import OpenLinkButton from '../buttons/OpenLinkButton';
import { Article } from '@/lib/models';
import Timestamp from '@/components/Timestamp';

const MediumArticleCard = ({ article }: { article: Article }) => {
	const { author, title, image, createdAt } = article;

	return (
		<div className='max-w-min flex flex-col'>
			<div className='relative w-[40rem] max-[1600px]:w-[30rem] max-[900px]:w-[90vw]'>
				<img
					className='h-[30rem] w-[40rem] rounded-[3rem] cursor-pointer max-[1600px]:h-[20rem] max-[1600px]:w-[30rem] max-[900px]:w-[90vw]  max-[900px]:h-[70vh] object-cover'
					src={image}
					alt={title}
				/>
				<Timestamp
					className='absolute right-[2rem] bottom-[2rem]'
					time={createdAt}
				/>
				<OpenLinkButton className='absolute right-[2rem] top-[2rem]' />
			</div>
			<label className='title-label mt-3'>{author}</label>
			<h3 className='mt-4 small-title'>{title}</h3>
		</div>
	);
};

export default MediumArticleCard;
