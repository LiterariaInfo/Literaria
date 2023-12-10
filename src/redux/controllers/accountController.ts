import api from '../../api.ts';

const login = (user: string, password: string): Promise<any> => {
	return api.post('/auth/login', {
		user,
		password
	});
};

const getAccount = (): Promise<any> => {
	return api.get('/auth/account');
};

export default {
	login,
	getAccount
}