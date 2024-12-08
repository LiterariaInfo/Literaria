export default ({
  url = '',
  className = ''
}: {
  url?: string;
  className?: string;
}) => {
  return (
    <div>
      <div
        className={`flex items-center justify-center rounded-full bg-white p-4 aspect-square ${className}`}
      >
        <i className='fa fa-arrow-up-right text-2xl' />
      </div>
    </div>
  );
};
