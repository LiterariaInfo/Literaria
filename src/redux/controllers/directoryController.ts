import api from '../../api.ts';

const getDirectory = (directoryID: number): Promise<any> => {
	return api.get(`/directory/${directoryID}`);
};

const createDirectory = (body: {
	name: string;
	parentID: number;
	description: string;
}): Promise<any> => {
	return api.post('/directory', body);
};

const updateDirectory = (
	directoryID: number,
	body: {
		name: string;
		parentID: number;
		description: string;
	}
): Promise<any> => {
	return api.put(`/directory/${directoryID}`, body);
};

const deleteDirectory = (directoryID: number): Promise<any> => {
	return api.delete(`/directory/${directoryID}`);
};

export default {
	getDirectory,
	createDirectory,
	updateDirectory,
	deleteDirectory
};
