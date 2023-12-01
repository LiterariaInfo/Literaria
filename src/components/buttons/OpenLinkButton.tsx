import topLeftArrow from '../../assets/icons/top-right-arrow.svg';

const OpenLinkButton = ({ className = '' }: { className?: string }) => {
	return (
		<div className={`open-link-button ${className}`}>
			<img src={topLeftArrow} alt='Top left arrow' />
		</div>
	);
};

export default OpenLinkButton;
