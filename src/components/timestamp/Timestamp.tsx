import './Timestamp.scss';
import dateFormatter from '../../Formatters/dateFormatter.ts';

const Timestamp = ({ time }: { time: Date }) => {
	return (
		<div className='time-stamp'>
			<label>{dateFormatter(new Date(time))}</label>
		</div>
	);
};

export default Timestamp;
