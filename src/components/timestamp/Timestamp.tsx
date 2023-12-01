import './Timestamp.scss';

const Timestamp = ({ time, className = '' }: { time: Date; className?: string }) => {
	return (
		<div className={`time-stamp ${className}`}>
			<label>
				{new Date(time)
					.toLocaleDateString('ro-RO', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit'
					})
					.replace(/\//g, '.')}
			</label>
		</div>
	);
};

export default Timestamp;
