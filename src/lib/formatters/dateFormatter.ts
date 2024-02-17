const dateFormatter = (date: Date): string => {
	return date
		.toLocaleDateString('ro-RO', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		})
		.replace('/', '.');
};

export default dateFormatter;
