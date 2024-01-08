export default ({ logo, title }: { logo: any; title: string }) => {
	return (
		<div className='bg-red-500 flex items-center gap-[0.8rem] overflow-hidden absolute p-4 rounded-[2rem] left-14 top-14 max-[1600px]:bg-white'>
			<img src={logo} alt='book' />
			<label className='text-[2.2rem] font-semibold'>{title}</label>
		</div>
	);
};
