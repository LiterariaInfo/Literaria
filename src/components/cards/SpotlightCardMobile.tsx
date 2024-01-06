import { Article } from '@/lib/models';
import dateFormatter from '@/lib/formatters/dateFormatter';

export default ({
	article,
	className = ''
}: {
	article: Article;
	className?: string;
}) => {
	const { title, createdAt, author } = article;

	return (
		<div
			className={`rounded-[2rem] bg-[#5b5a36] p-4 flex flex-col gap-10 justify-between ${className}`}
		>
			<h1 className='text-white extra-small-title'>{title}</h1>
			<div className='flex flex-col'>
				<label className='text-white title-label'>
					{dateFormatter(createdAt)}
				</label>
				<label className='text-white title-label'>{author}</label>
			</div>
		</div>
	);
};
