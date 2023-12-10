import api from '../../api.ts';

export const getDirectory = (directoryID: number): Promise<any> => {
	return api.get(`/directory/${directoryID}`);
};

export const createDirectory = (body: {
	name: string;
	parentID: number;
	description: string;
}): Promise<any> => {
	return api.post('/directory', body);
};

export const updateDirectory = (
	directoryID: number,
	body: {
		name: string;
		parentID: number;
		description: string;
	}
): Promise<any> => {
	return api.put(`/directory/${directoryID}`, body);
};

export const deleteDirectory = (directoryID: number): Promise<any> => {
	return api.delete(`/directory/${directoryID}`);
};
