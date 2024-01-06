import OpenLinkButton from '@/components/buttons/OpenLinkButton';
import { Article } from '@/lib/models';

const SmallArticleCard = ({
	article,
	className = ''
}: {
	article: Article;
	className?: string;
}) => {
	const { author, title, image } = article;

	return (
		<div className={`flex flex-col ${className}`}>
			<div className='relative grow flex'>
				<img
					className='object-cover rounded-[3rem] cursor-pointer'
					src={image}
					alt={title}
				/>
				<OpenLinkButton className='absolute right-8 top-8' />
			</div>
			<label className='title-label'>{author}</label>
			<h3 className='small-title mt-4 mb-0 mx-0'>{title}</h3>
		</div>
	);
};

export default SmallArticleCard;
