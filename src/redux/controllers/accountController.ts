import api from '../../api.ts';

export const login = (user: string, password: string): Promise<any> => {
	return api.post('/auth/login', {
		user,
		password
	});
};

export const getAccount = (): Promise<any> => {
	return api.get('/auth/account');
};
