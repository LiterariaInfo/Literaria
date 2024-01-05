import topLeftArrow from '../../assets/icons/top-right-arrow.svg';
import { Link } from 'react-router-dom';

const OpenLinkButton = ({ url = '' }: { url?: string }) => {
	return (
		<Link to={url}>
			<div className='open-link-button'>
				<img src={topLeftArrow} alt='Top left arrow' />
			</div>
		</Link>
	);
};

export default OpenLinkButton;
