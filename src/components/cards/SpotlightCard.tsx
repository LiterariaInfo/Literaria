import { Article } from '@/lib/models';
import dateFormatter from '@/lib/formatters/dateFormatter';
import OpenLinkButton from '@/components/buttons/OpenLinkButton';

const SpotlightCard = ({
	article,
	className = ''
}: {
	article: Article;
	className?: string;
}) => {
	const { title, author, createdAt } = article;

	return (
		<div
			className={`flex flex-col p-14 rounded-[3rem] bg-[#5b5a36] laptop::p-10 tablet:p-8 tablet:rounded-[2rem] ${className}`}
		>
			<h1 className='text-[white] small-title m-0'>{title}</h1>
			<label className='text-[white] text-xl font-medium mt-2 mb-4 mx-0'>
				{author}
			</label>
			<div className='flex items-center justify-between gap-4'>
				<label className='text-[white] text-base font-medium mt-[1%]'>
					{dateFormatter(new Date(createdAt))}
				</label>
				<OpenLinkButton />
			</div>
		</div>
	);
};

export default SpotlightCard;
