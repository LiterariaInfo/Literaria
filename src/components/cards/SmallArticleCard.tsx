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
			<div className='relative flex h-0 grow'>
				<img
					className='object-cover rounded-[3rem] cursor-pointer w-full'
					src={image}
					alt={title}
				/>
				<OpenLinkButton className='absolute right-8 top-8' />
			</div>
			<div className='flex flex-col'>
				<label className='title-label'>{author}</label>
				<h3 className='small-title mt-4 mb-0 mx-0'>{title}</h3>
			</div>
		</div>
	);
};

export default SmallArticleCard;
