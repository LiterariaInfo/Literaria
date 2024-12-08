export default function NextItemButton({
  onClick,
  className
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center h-10 w-10 backdrop-blur-[0.1rem] rounded-[5rem] bg-[#ffffffcc] hover:bg-[#ffffff] cursor-pointer ${className}`}
    >
      <i className='fa fa-arrow-right text-xl' />
    </div>
  );
}
